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

    // Shared Helper: Set Loading State (with Overlay)
    function setPdfLoading(isLoading, isPreview = false) {
        const previewBtn = document.getElementById('btn-preview-pdf');
        const downloadBtn = document.getElementById('btn-download-pdf');
        const modal = document.querySelector('#downloadModal > div'); // Modal container
        if (!previewBtn || !downloadBtn) return;

        if (isLoading) {
            // Disable buttons
            previewBtn.disabled = true;
            downloadBtn.disabled = true;

            // Add Overlay to the modal
            const overlay = document.createElement('div');
            overlay.id = 'pdf-export-overlay';
            overlay.className = 'absolute inset-0 z-[100] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-fade-in';
            overlay.innerHTML = `
                <div class="relative">
                    <div class="w-16 h-16 border-4 border-orange-100 dark:border-orange-900/30 border-t-orange-500 rounded-full animate-spin mb-4 mx-auto"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <i data-lucide="file-text" class="w-6 h-6 text-orange-500 animate-pulse"></i>
                    </div>
                </div>
                <h3 class="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                    ${isPreview ? 'Preparing Preview...' : 'Creating your PDF...'}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 max-w-[240px] leading-relaxed">
                    This might take a moment depending on the amount of content.
                </p>
            `;
            if (modal) {
                modal.classList.add('relative');
                modal.appendChild(overlay);
            }
            if (window.lucide) lucide.createIcons();
        } else {
            // Re-enable buttons
            previewBtn.disabled = false;
            downloadBtn.disabled = false;
            
            // Remove Overlay
            const overlay = document.getElementById('pdf-export-overlay');
            if (overlay) overlay.remove();
        }
    }

    // Main Export Function
    window.exportNotesPDF = async function (isPreview = false) {
        if (!window.jspdf) {
            alert("PDF Library (jspdf) is not loaded. Please refresh the page.");
            return;
        }

        setPdfLoading(true, isPreview);

        try {
            // 1. Configuration
            const scopeEl = document.querySelector('input[name="notesScope"]:checked');
            const scope = scopeEl ? scopeEl.value : 'all';

            const inclStatement = document.getElementById('includeStatement')?.checked ?? true;
            const inclComplexity = document.getElementById('includeComplexity')?.checked ?? true;
            const inclExamples = document.getElementById('includeExamples')?.checked ?? false;
            const inclConstraints = document.getElementById('includeConstraints')?.checked ?? false;
            const inclRealWorld = document.getElementById('includeRealWorld')?.checked ?? false;

            // 2. Fetch Data
            // User Data from IndexedDB
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
                }
            } catch (e) {
                console.warn("Could not fetch problem metadata:", e);
            }

            if (scope === 'all' || scope === 'problems') {
                const dbProblems = await window.dsaDB.getAllProblems();

                // Filter only those with notes
                const withNotes = dbProblems.filter(p => p.note && p.note.trim().length > 0);
                notesItems = withNotes.map(dbItem => {
                    const meta = metadataMap[dbItem.id] || {};
                    return {
                        type: 'Problem Note',
                        title: meta.title || dbItem.id,
                        content: dbItem.note,
                        difficulty: meta.difficulty || 'Unknown',
                        meta: meta,
                        date: dbItem.lastUpdated ? new Date(dbItem.lastUpdated).toLocaleDateString() : 'Unknown Date'
                    };
                });
            }

            if (scope === 'all' || scope === 'reflections') {
                const sessions = await window.dsaDB.getAllSessions();
                reflectionItems = sessions
                    .filter(s => s.notes && s.notes.reflection && s.notes.reflection.trim().length > 0)
                    .map(s => {
                        const enrichedProblems = (s.problems || []).map(p => {
                            const pid = p.id || (p.permalink ? p.permalink.replace(/\/$/, '').split('/').pop() : null);
                            const meta = pid ? metadataMap[pid] : null;
                            return {
                                status: p.status || 'default',
                                title: meta ? meta.title : (p.title || pid || 'Unknown Problem'),
                                difficulty: meta ? meta.difficulty : 'Unknown',
                                timeSpent: p.timeSpentSeconds || 0
                            };
                        });

                        const solvedCount = enrichedProblems.filter(p => p.status === 'solved').length;
                        const totalCount = enrichedProblems.length;
                        const totalTimeSeconds = enrichedProblems.reduce((acc, curr) => acc + (curr.timeSpent || 0), 0);
                        const totalTimeMin = Math.round(totalTimeSeconds / 60);

                        let plannedDuration = 0;
                        if (s.config && s.config.duration) {
                            plannedDuration = parseInt(s.config.duration) || 0;
                        }

                        return {
                            type: 'Reflection',
                            title: s.title || `Session on ${new Date(s.createdAt).toLocaleDateString()}`,
                            content: s.notes.reflection,
                            date: new Date(s.createdAt).toLocaleDateString(),
                            problems: enrichedProblems,
                                stats: {
                                    solved: solvedCount,
                                    total: totalCount,
                                    timeMin: totalTimeMin,
                                    plannedMin: plannedDuration
                                }
                            };
                        });
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
                'pending': { bg: [156, 163, 175], txt: [255, 255, 255] },
                'skipped': { bg: [156, 163, 175], txt: [255, 255, 255] },
                'default': { bg: [156, 163, 175], txt: [255, 255, 255] }
            };

            const drawHeader = () => {
                const headerHeight = 35;
                doc.setFillColor(255, 255, 255);
                doc.rect(0, 0, pageW, headerHeight + 2, 'F');
                const centerY = headerHeight / 2;
                const logoSize = 10;
                const logoY = centerY - (logoSize / 2);
                let textStartX = margin;
                const gapLogoSep = 2;
                const gapSepText = 2;

                if (logoImg) {
                    const logoRatio = logoImg.width / logoImg.height;
                    const renderW = logoSize * logoRatio;
                    doc.addImage(logoImg, 'PNG', margin, logoY, renderW, logoSize);
                    doc.setDrawColor(229, 231, 235);
                    doc.setLineWidth(0.4);
                    const lineH = logoSize * 0.75;
                    const lineY1 = centerY - (lineH / 2);
                    const lineY2 = centerY + (lineH / 2);
                    const sepX = margin + renderW + gapLogoSep;
                    doc.line(sepX, lineY1, sepX, lineY2);
                    textStartX = sepX + gapSepText;
                }

                doc.setFont("helvetica", "bold"); doc.setFontSize(26);
                const textY = centerY + 3.5;
                doc.setLineWidth(0.4); doc.setDrawColor(147, 51, 234); doc.setTextColor(147, 51, 234);
                doc.text("CSRGO", textStartX, textY, { renderingMode: 'fillThenStroke' });
                const csrgoWidth = doc.getTextWidth("CSRGO");
                doc.setDrawColor(37, 99, 235); doc.setTextColor(37, 99, 235);
                doc.text("DSA", textStartX + csrgoWidth + 2.5, textY, { renderingMode: 'fillThenStroke' });

                doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(75, 85, 99);
                const nameText = nickname.endsWith('s') ? nickname + "' Personal Notes" : nickname + "'s Personal Notes";
                doc.text(nameText, pageW - margin, centerY - 1, { align: 'right' });
                doc.setFontSize(8); doc.setTextColor(156, 163, 175);
                doc.text("Exported on " + new Date().toLocaleDateString(), pageW - margin, centerY + 3, { align: 'right' });

                const gradY = headerHeight;
                const steps = 100;
                const c1 = [147, 51, 234]; const c2 = [37, 99, 235];
                for (let i = 0; i < steps; i++) {
                    const t = i / steps;
                    const r = Math.round(c1[0] + t * (c2[0] - c1[0]));
                    const g = Math.round(c1[1] + t * (c2[1] - c1[1]));
                    const b = Math.round(c1[2] + t * (c2[2] - c1[2]));
                    doc.setFillColor(r, g, b); doc.rect((i * (pageW / steps)), gradY, (pageW / steps) + 1, 1.5, 'F');
                }
            };

            const drawFooter = () => {
                doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(150, 150, 150);
                doc.text(`${pageNum}`, pageW / 2, pageH - 10, { align: 'center' });
                pageNum++;
            };

            const checkOverflow = (h) => {
                if (y + h > pageH - margin) {
                    drawFooter(); doc.addPage(); drawHeader();
                    y = 50; return true;
                }
                return false;
            };

            for (let i = 0; i < dataToPrint.length; i++) {
                if (i > 0) { drawFooter(); doc.addPage(); }
                drawHeader(); y = 50;
                const item = dataToPrint[i];
                doc.setFont("helvetica", "bold"); doc.setFontSize(22); doc.setTextColor(...colTextMain);
                doc.text(item.title, margin, y); y += 10;

                if (item.type === 'Problem Note') {
                    doc.setFontSize(10);
                    const badgeText = (item.difficulty || 'Unknown').toUpperCase();
                    let badgeBg = [229, 231, 235]; let badgeTxt = [55, 65, 81];
                    if (item.difficulty === 'Easy') { badgeBg = [220, 252, 231]; badgeTxt = [21, 128, 61]; }
                    if (item.difficulty === 'Medium') { badgeBg = [254, 249, 195]; badgeTxt = [161, 98, 7]; }
                    if (item.difficulty === 'Hard') { badgeBg = [254, 226, 226]; badgeTxt = [185, 28, 28]; }
                    const badgeW = doc.getTextWidth(badgeText) + 10;
                    doc.setFillColor(...badgeBg); doc.roundedRect(margin, y, badgeW, 7, 2, 2, 'F');
                    doc.setTextColor(...badgeTxt); doc.text(badgeText, margin + 5, y + 5); y += 15;

                    if (item.meta) {
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

                        if (inclComplexity || inclConstraints || (inclExamples && item.meta.examples)) {
                            checkOverflow(60);
                            let infoY = y;
                            const showComplexity = inclComplexity;
                            const showConstraints = inclConstraints && item.meta.constraints?.length > 0;

                            if (showComplexity && showConstraints) {
                                const gutter = 6; const col1W = ((contentW - gutter) * 0.33);
                                const col2W = ((contentW - gutter) * 0.67); const col2X = margin + col1W + gutter;
                                let c1Y = infoY; doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30);
                                doc.text("Complexity", margin, c1Y); c1Y += 5;
                                doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted); doc.setFontSize(9);
                                const timeTxt = `• Time: ${item.meta.timeComplexity || '-'}`;
                                const spaceTxt = `• Space: ${item.meta.spaceComplexity || '-'}`;
                                const splitTime = doc.splitTextToSize(timeTxt, col1W); doc.text(splitTime, margin, c1Y); c1Y += (splitTime.length * 5);
                                const splitSpace = doc.splitTextToSize(spaceTxt, col1W); doc.text(splitSpace, margin, c1Y); c1Y += (splitSpace.length * 5);
                                let c2Y = infoY; doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30);
                                doc.text("Constraints", col2X, c2Y); c2Y += 5;
                                doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted); doc.setFontSize(9);
                                item.meta.constraints.forEach(c => {
                                    const splitC = doc.splitTextToSize("• " + stripHtml(c), col2W);
                                    doc.text(splitC, col2X, c2Y); c2Y += (splitC.length * 4.5);
                                });
                                infoY = Math.max(c1Y, c2Y) + 8;
                            } else {
                                if (showComplexity) {
                                    doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30);
                                    doc.text("Complexity", margin, infoY); infoY += 5;
                                    doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted); doc.setFontSize(9);
                                    doc.text(`• Time: ${item.meta.timeComplexity || '-'}`, margin, infoY); infoY += 5;
                                    doc.text(`• Space: ${item.meta.spaceComplexity || '-'}`, margin, infoY); infoY += 8;
                                }
                                if (showConstraints) {
                                    doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30);
                                    doc.text("Constraints", margin, infoY); infoY += 5;
                                    doc.setFont("helvetica", "normal"); doc.setTextColor(...colTextMuted); doc.setFontSize(9);
                                    item.meta.constraints.forEach(c => {
                                        const splitC = doc.splitTextToSize("• " + stripHtml(c), contentW);
                                        doc.text(splitC, margin, infoY); infoY += (splitC.length * 4.5);
                                    });
                                    infoY += 8;
                                }
                            }
                            if (inclExamples && item.meta.examples?.length) {
                                y = infoY; checkOverflow(30); infoY = y;
                                doc.setFont("helvetica", "bold"); doc.setTextColor(30); doc.setFontSize(10);
                                doc.text("Examples", margin, infoY); infoY += 5;
                                doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...colTextMuted);
                                item.meta.examples.forEach((ex, exIdx) => {
                                    const splitEx = doc.splitTextToSize(`Ex ${exIdx + 1}: Input: ${ex.input} | Output: ${ex.output}`, contentW);
                                    doc.text(splitEx, margin, infoY); infoY += (splitEx.length * 4) + 2;
                                });
                                infoY += 5;
                            }
                            if (inclRealWorld && item.meta.realWorld && Array.isArray(item.meta.realWorld)) {
                                y = infoY; checkOverflow(30); infoY = y;
                                doc.setFont("helvetica", "bold"); doc.setTextColor(30); doc.setFontSize(10);
                                doc.text("Real World Application", margin, infoY); infoY += 6;
                                doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...colTextMuted);
                                item.meta.realWorld.forEach(rw => {
                                    const rwTitle = rw.title || "Application";
                                    const rwDesc = rw.description || "";
                                    const fullText = `• ${rwTitle}: ${rwDesc}`;
                                    const splitRW = doc.splitTextToSize(stripHtml(fullText), contentW);
                                    checkOverflow(splitRW.length * 5);
                                    doc.text(splitRW, margin, infoY); infoY += (splitRW.length * 4.5);
                                });
                                infoY += 5;
                            }
                            y = infoY;
                        }
                    }
                } else {
                    doc.setFontSize(11); doc.setTextColor(...colTextMuted); doc.text("REFLECTIONS", margin, y); y += 10;
                    if (item.stats) {
                        doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30);
                        let statsText = `Result: ${item.stats.solved}/${item.stats.total} Solved`;
                        if (item.stats.total > 0 && item.stats.plannedMin > 0) statsText += `  |  Time: ${item.stats.timeMin}/${item.stats.plannedMin} min`;
                        else if (item.stats.total > 0) statsText += `  |  Time: ${item.stats.timeMin} min`;
                        doc.text(statsText, margin, y); y += 8;
                    }
                    if (item.problems) {
                        checkOverflow(item.problems.length * 15);
                        doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30);
                        doc.text("Problem List", margin, y); y += 3;
                        const rowH = 12; const col1W = 12; const col3W = 20; const col4W = 18;
                        const col2W = contentW - col1W - col3W - col4W; const col1X = margin;
                        const col2X = margin + col1W; const col3X = margin + col1W + col2W;
                        const col4X = margin + col1W + col2W + col3W;
                        doc.setFontSize(9); doc.setTextColor(...colTextMuted); doc.setFont("helvetica", "bold");
                        doc.setFillColor(249, 250, 251); doc.rect(margin, y, contentW, 8, 'F');
                        doc.text("Prob", col1X + 2, y + 5.5); doc.text("Title", col2X + 2, y + 5.5);
                        doc.text("Difficulty", col3X + 2, y + 5.5); doc.text("Time", col4X + 2, y + 5.5); y += 8;
                        item.problems.forEach((p, idx) => {
                            checkOverflow(rowH);
                            const statusObj = statusColors[p.status || 'default'] || statusColors['default'];
                            doc.setDrawColor(229, 231, 235); doc.setLineWidth(0.1); doc.line(margin, y + rowH, margin + contentW, y + rowH);
                            const centerX = col1X + (col1W / 2); const centerY = y + (rowH / 2);
                            doc.setFillColor(...statusObj.bg); doc.circle(centerX, centerY, 3.5, 'F');
                            doc.setTextColor(255, 255, 255); doc.setFontSize(7); doc.setFont("helvetica", "bold");
                            const pNum = `P${idx + 1}`; const pNumW = doc.getTextWidth(pNum);
                            doc.text(pNum, centerX - (pNumW / 2), centerY + 1.25);
                            doc.setTextColor(55, 65, 81); doc.setFontSize(10); doc.setFont("helvetica", "normal");
                            let titleTxt = p.title; if (doc.getTextWidth(titleTxt) > col2W - 4) titleTxt = titleTxt.substring(0, 30) + "...";
                            doc.text(titleTxt, col2X + 2, centerY + 1.5);
                            if (p.difficulty && p.difficulty !== 'Unknown') {
                                let dBg = [229, 231, 235]; let dTxt = [55, 65, 81];
                                if (p.difficulty === 'Easy') { dBg = [220, 252, 231]; dTxt = [21, 128, 61]; }
                                else if (p.difficulty === 'Medium') { dBg = [254, 249, 195]; dTxt = [161, 98, 7]; }
                                else if (p.difficulty === 'Hard') { dBg = [254, 226, 226]; dTxt = [185, 28, 28]; }
                                doc.setFontSize(8); doc.setFont("helvetica", "bold");
                                const badgeW = doc.getTextWidth(p.difficulty.toUpperCase()) + 6;
                                doc.setFillColor(...dBg); doc.roundedRect(col3X + ((col3W - badgeW) / 2), centerY - 2.5, badgeW, 5, 1, 1, 'F');
                                doc.setTextColor(...dTxt); doc.text(p.difficulty.toUpperCase(), col3X + ((col3W - badgeW) / 2) + 3, centerY + 1);
                            }
                            doc.setFont("helvetica", "normal"); doc.setTextColor(107, 114, 128); doc.setFontSize(9);
                            const tMin = p.timeSpent > 0 ? Math.round(p.timeSpent / 60) + "m" : "-";
                            doc.text(tMin, col4X + 4, centerY + 1.5); y += rowH;
                        }); y += 5;
                    }
                }
                if (item.content) {
                    y += 2; doc.setDrawColor(...colLine); doc.line(margin, y, margin + 40, y); y += 6;
                    doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(...colTextMain);
                    doc.text("My Notes", margin, y); y += 8;
                    doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(55, 65, 81);
                    const splitContent = doc.splitTextToSize(stripHtml(item.content), contentW);
                    for (let l = 0; l < splitContent.length; l++) {
                        if (checkOverflow(6)) { doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(55, 65, 81); }
                        doc.text(splitContent[l], margin, y); y += 6;
                    }
                }
            }
            drawFooter();

            if (isPreview) {
                const blob = doc.output('blob');
                window.open(URL.createObjectURL(blob), '_blank');
            } else {
                const username = (localStorage.getItem('dsa-nickname') || 'user').replace(/\s+/g, '-');
                doc.save(`${username}-DSA-Notes-${new Date().toISOString().split('T')[0]}.pdf`);
                if (window.closeDownloadModal) window.closeDownloadModal();
            }
        } catch (err) {
            console.error("PDF Export Error:", err);
            alert("Failed to export PDF: " + err.message);
        } finally {
            setPdfLoading(false);
        }
    };
})();
