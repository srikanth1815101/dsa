// static/js/pdf-export.js

(function () {
    // Shared Helper: Load Image
    function loadImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = url;
        });
    }

    // Shared Helper: Strip HTML
    function stripHtml(html) {
        if (!html) return '';
        let text = html
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/p>/gi, '\n\n')
            .replace(/<p>/gi, '')
            .replace(/<ul>/gi, '\n')
            .replace(/<\/ul>/gi, '')
            .replace(/<li>/gi, '  • ')
            .replace(/<\/li>/gi, '\n')
            .replace(/<pre>/gi, '\n[Code Block]\n')
            .replace(/<\/pre>/gi, '\n')
            .replace(/<[^>]+>/g, '');
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value.trim();
    }

    // Main Export Function
    window.exportNotesPDF = async function (isPreview = false) {
        if (!window.jspdf) {
            alert("PDF Library (jspdf) is not loaded. Please refresh the page.");
            return;
        }

        // 1. Configuration
        const scopeEl = document.querySelector('input[name="notesScope"]:checked');
        const scope = scopeEl ? scopeEl.value : 'all';

        const inclStatement = document.getElementById('includeStatement')?.checked ?? true;
        const inclComplexity = document.getElementById('includeComplexity')?.checked ?? true;
        const inclExamples = document.getElementById('includeExamples')?.checked ?? false;
        const inclConstraints = document.getElementById('includeConstraints')?.checked ?? false;

        // Close Modal if open (only if downloading)
        if (!isPreview && window.closeDownloadModal) window.closeDownloadModal();

        // 2. Fetch Data
        // User Data from IndexedDB
        let problemsCount = 0;
        let notesItems = [];
        let reflectionItems = [];

        if (!window.dsaDB) {
            alert("Database not initialized.");
            return;
        }

        // Fetch Metadata (Static Content for Examples/Constraints)
        let metadataMap = {};
        try {
            const res = await fetch('/problems/metadata.json?v=' + new Date().getTime());
            if (res.ok) {
                const allProbData = await res.json();
                allProbData.forEach(p => {
                    const id = p.id || (p.permalink ? p.permalink.replace(/\/$/, '').split('/').filter(Boolean).pop() : null);
                    if (id) metadataMap[id] = p;
                });
            } else {
                console.warn("Could not fetch metadata from /problems/metadata.json");
            }
        } catch (e) {
            console.warn("Could not fetch problem metadata:", e);
        }

        try {
            if (scope === 'all' || scope === 'problems') {
                const dbProblems = await window.dsaDB.getAllProblems();

                // Filter only those with notes
                const withNotes = dbProblems.filter(p => p.note && p.note.trim().length > 0);
                notesItems = withNotes.map(dbItem => {
                    const meta = metadataMap[dbItem.id] || {};
                    return {
                        type: 'Problem Note',
                        title: meta.title || dbItem.id, // Fallback to ID if title missing
                        content: dbItem.note,
                        difficulty: meta.difficulty || 'Unknown',
                        meta: meta, // Contains constraints, examples, etc.
                        date: dbItem.lastUpdated ? new Date(dbItem.lastUpdated).toLocaleDateString() : 'Unknown Date'
                    };
                });
            }

            if (scope === 'all' || scope === 'reflections') {
                const sessions = await window.dsaDB.getAllSessions();
                reflectionItems = sessions
                    .filter(s => s.notes && s.notes.reflection && s.notes.reflection.trim().length > 0)
                    .map(s => {
                        // Enrich problems with data from metadataMap
                        const enrichedProblems = (s.problems || []).map(p => {
                            const pid = p.id || (p.permalink ? p.permalink.replace(/\/$/, '').split('/').pop() : null);
                            const meta = pid ? metadataMap[pid] : null;
                            return {
                                status: p.status || 'default',
                                title: meta ? meta.title : (p.title || pid || 'Unknown Problem')
                            };
                        });

                        return {
                            type: 'Reflection',
                            title: s.title || `Session on ${new Date(s.createdAt).toLocaleDateString()}`,
                            content: s.notes.reflection,
                            date: new Date(s.createdAt).toLocaleDateString(),
                            problems: enrichedProblems
                        };
                    });
            }

        } catch (e) {
            console.error("Error fetching data:", e);
            alert("Failed to export notes: " + e.message);
            return;
        }

        const dataToPrint = [...notesItems, ...reflectionItems];

        if (dataToPrint.length === 0) {
            alert("No notes found to export.");
            return;
        }

        // 3. Generate PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Design Config
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();
        const margin = 20;
        const contentW = pageW - (margin * 2);

        let y = 0;
        let pageNum = 1;

        const logoImg = await loadImage('/logo.png');
        const nickname = localStorage.getItem('dsa-nickname') || "User";

        const colPrimary = [79, 70, 229];   // Indigo
        const colTextMain = [17, 24, 39];    // Gray 900
        const colTextMuted = [107, 114, 128]; // Gray 500
        const colBgAccent = [249, 250, 251];  // Gray 50
        const colLine = [229, 231, 235];      // Gray 200

        const statusColors = {
            'solved': { bg: [22, 163, 74], txt: [255, 255, 255] },
            'attempted': { bg: [234, 179, 8], txt: [255, 255, 255] },
            'skipped': { bg: [239, 68, 68], txt: [255, 255, 255] },
            'default': { bg: [156, 163, 175], txt: [255, 255, 255] }
        };

        const drawHeader = () => {
            doc.setFillColor(255, 255, 255);
            doc.rect(0, 0, pageW, 30, 'F');

            if (logoImg) {
                const logoSize = 10;
                const logoRatio = logoImg.width / logoImg.height;
                const renderW = logoSize * logoRatio;
                doc.addImage(logoImg, 'PNG', margin, 10, renderW, logoSize);

                // Separator
                doc.setDrawColor(220, 220, 220);
                doc.setLineWidth(0.5);
                doc.line(margin + renderW + 4, 11, margin + renderW + 4, 19);

                // Brand
                doc.setFont("helvetica", "bold"); doc.setFontSize(16); doc.setTextColor(...colTextMain);
                doc.text("CSRGO DSA", margin + renderW + 8, 18);

                // Tagline
                doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(...colTextMuted);
                const nameText = nickname.endsWith('s') ? nickname + "\u0027 Personal Notes" : nickname + "\u0027s Personal Notes";
                doc.text(nameText, margin + renderW + 8 + 40, 18);
            }

            // Date
            doc.setFontSize(9); doc.setTextColor(...colTextMuted);
            doc.text(new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }), pageW - margin, 18, { align: 'right' });

            // Gradient Line
            const steps = 60;
            const c1 = [126, 34, 206]; const c2 = [37, 99, 235];
            for (let i = 0; i < steps; i++) {
                const t = i / steps;
                const r = Math.round(c1[0] + t * (c2[0] - c1[0]));
                const g = Math.round(c1[1] + t * (c2[1] - c1[1]));
                const b = Math.round(c1[2] + t * (c2[2] - c1[2]));
                doc.setFillColor(r, g, b);
                doc.rect((i * (pageW / steps)), 29, (pageW / steps) + 1, 1, 'F');
            }
        };

        const drawFooter = () => {
            doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(150, 150, 150);
            doc.text(`${pageNum}`, pageW / 2, pageH - 10, { align: 'center' });
            pageNum++;
        };

        const checkOverflow = (h) => {
            if (y + h > pageH - margin) {
                drawFooter();
                doc.addPage();
                drawHeader();
                y = 40;
                return true;
            }
            return false;
        };

        // LOOP
        for (let i = 0; i < dataToPrint.length; i++) {
            if (i > 0) {
                drawFooter();
                doc.addPage();
            }
            drawHeader();
            y = 45;

            const item = dataToPrint[i];

            // Title
            doc.setFont("helvetica", "bold"); doc.setFontSize(22); doc.setTextColor(...colTextMain);
            doc.text(item.title, margin, y); y += 10;

            if (item.type === 'Problem Note') {
                // Badge
                doc.setFontSize(10);
                const badgeText = (item.difficulty || 'Unknown').toUpperCase();
                let badgeBg = [229, 231, 235]; let badgeTxt = [55, 65, 81];
                if (item.difficulty === 'Easy') { badgeBg = [220, 252, 231]; badgeTxt = [21, 128, 61]; }
                if (item.difficulty === 'Medium') { badgeBg = [254, 249, 195]; badgeTxt = [161, 98, 7]; }
                if (item.difficulty === 'Hard') { badgeBg = [254, 226, 226]; badgeTxt = [185, 28, 28]; }

                const badgeW = doc.getTextWidth(badgeText) + 10;
                doc.setFillColor(...badgeBg); doc.roundedRect(margin, y, badgeW, 7, 2, 2, 'F');
                doc.setTextColor(...badgeTxt); doc.text(badgeText, margin + 5, y + 5); y += 15;

                // Metadata
                if (item.meta) {
                    // Statement
                    if (inclStatement && item.meta.summary) {
                        const summaryTxt = stripHtml(item.meta.summary);
                        const splitSum = doc.splitTextToSize(summaryTxt, contentW - 10);
                        const boxH = (splitSum.length * 5) + 15;
                        checkOverflow(boxH);

                        doc.setFillColor(...colBgAccent); doc.roundedRect(margin, y, contentW, boxH, 3, 3, 'F');
                        doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...colPrimary);
                        doc.text("PROBLEM", margin + 5, y + 7);
                        doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...colTextMain);
                        doc.text(splitSum, margin + 5, y + 14); y += boxH + 8;
                    }

                    // Info Block
                    if (inclComplexity || inclConstraints || (inclExamples && item.meta.examples)) {
                        checkOverflow(40);
                        let infoY = y;

                        // Complexity
                        if (inclComplexity) {
                            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30); doc.text("Complexity", margin, infoY); infoY += 5;
                            doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted);
                            doc.text(`Time: ${item.meta.timeComplexity || '-'} | Space: ${item.meta.spaceComplexity || '-'}`, margin, infoY); infoY += 10;
                        }

                        // Constraints
                        if (inclConstraints && item.meta.constraints && item.meta.constraints.length) {
                            doc.setFont("helvetica", "bold"); doc.setTextColor(30); doc.text("Constraints", margin, infoY); infoY += 5;
                            doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted);
                            const cText = item.meta.constraints.map(c => stripHtml(c)).join('; ');
                            // Truncate if too long?
                            const splitC = doc.splitTextToSize(cText, contentW);
                            doc.text(splitC, margin, infoY);
                            infoY += (splitC.length * 5) + 5;
                        }

                        // Examples
                        if (inclExamples && item.meta.examples && item.meta.examples.length) {
                            doc.setFont("helvetica", "bold"); doc.setTextColor(30); doc.text("Examples", margin, infoY); infoY += 5;
                            doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...colTextMuted);

                            item.meta.examples.forEach((ex, exIdx) => {
                                const exTitle = `Ex ${exIdx + 1}: Input: ${ex.input} | Output: ${ex.output}`;
                                const splitEx = doc.splitTextToSize(exTitle, contentW);
                                doc.text(splitEx, margin, infoY);
                                infoY += (splitEx.length * 4) + 2;
                            });
                            infoY += 5;
                        }

                        // Real World Scenarios
                        if (document.getElementById('includeRealWorld')?.checked && item.meta.realWorld && item.meta.realWorld.length) {
                            doc.setFont("helvetica", "bold"); doc.setTextColor(30); doc.text("Real World Applications", margin, infoY); infoY += 5;
                            doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...colTextMuted);

                            item.meta.realWorld.forEach((rw) => {
                                const rwText = `• ${rw.title}: ${rw.description}`;
                                const splitRw = doc.splitTextToSize(rwText, contentW);
                                doc.text(splitRw, margin, infoY);
                                infoY += (splitRw.length * 4) + 2;
                            });
                            infoY += 5;
                        }

                        y = infoY + 5;
                    }
                }
            } else {
                // Reflection Header
                doc.setFontSize(11); doc.setTextColor(...colTextMuted); doc.text("REFLECTIONS", margin, y); y += 10;

                if (item.problems) {
                    checkOverflow(item.problems.length * 10);
                    doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30); doc.text("Review List", margin, y); y += 6;
                    item.problems.forEach(p => {
                        doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted);
                        const status = (p.status || 'default').toUpperCase();
                        doc.text(`• [${status}] ${p.title}`, margin + 2, y); y += 5;
                    });
                    y += 5;
                }
            }

            // User Content
            if (item.content) {
                y += 5;
                doc.setDrawColor(...colLine); doc.line(margin, y, margin + 40, y); y += 10;
                doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(...colTextMain);
                doc.text("My Notes", margin, y); y += 8;

                doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(55, 65, 81);
                const plainText = stripHtml(item.content);
                const splitContent = doc.splitTextToSize(plainText, contentW);

                // Line by line to check overflow
                for (let l = 0; l < splitContent.length; l++) {
                    checkOverflow(6);
                    doc.text(splitContent[l], margin, y);
                    y += 6;
                }
            }
        }

        drawFooter();

        if (isPreview) {
            const blob = doc.output('blob');
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, '_blank');
        } else {
            doc.save(`${nickname}_DSA_Notes.pdf`);
        }
    };

})();
