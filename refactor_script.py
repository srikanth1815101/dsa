import re
import os

base_dir = r"C:\Users\CSR\Desktop\git csrgo.com\dsa"
baseof_path = os.path.join(base_dir, "layouts", "_default", "baseof.html")
styles_path = os.path.join(base_dir, "static", "css", "styles.css")
main_js_path = os.path.join(base_dir, "static", "js", "main.js")
solutions_path = os.path.join(base_dir, "layouts", "solutions", "single.html")
problem_utils_path = os.path.join(base_dir, "static", "js", "problem-utils.js")

# 1. READ ALL FILES
with open(baseof_path, "r", encoding="utf-8") as f:
    baseof = f.read()

with open(styles_path, "r", encoding="utf-8") as f:
    styles = f.read()

with open(solutions_path, "r", encoding="utf-8") as f:
    solutions = f.read()

with open(problem_utils_path, "r", encoding="utf-8") as f:
    problem_utils = f.read()

# 2. EXTRACT CUSTOM CSS FROM baseof.html
custom_css_match = re.search(r"<!-- Custom CSS -->\s*<style>(.*?)</style>", baseof, re.DOTALL)
chroma_css_match = re.search(r"<!-- Global Syntax Highlighting Styles -->\s*<style>(.*?)</style>", baseof, re.DOTALL)

if custom_css_match:
    styles += "\n/* Extracted Custom CSS */\n" + custom_css_match.group(1).strip()
    baseof = baseof.replace(custom_css_match.group(0), '<!-- Custom CSS --><link rel="stylesheet" href="/css/styles.css">')

if chroma_css_match:
    styles += "\n/* Extracted Syntax CSS */\n" + chroma_css_match.group(1).strip()
    baseof = baseof.replace(chroma_css_match.group(0), "")

# 3. EXTRACT JS FROM baseof.html
# We'll pull out the scripts for goToTopBtn, icons, Theme Toggle
theme_toggle_script = re.search(r"<!-- Theme Toggle Script -->\s*<script>(.*?)</script>", baseof, re.DOTALL)

# The other scripts are scattered.
gototop_match = re.search(r"    <button id=\"goToTopBtn\".*?</button>\s*<script>(.*?)</script>\s*<!-- Initialize", baseof, re.DOTALL)
if gototop_match:
    gototop_js = gototop_match.group(1).strip()
    baseof = baseof.replace(gototop_match.group(1), "") # remove the content, leave empty script, or remove tag completely
    # wait, replace is safer on exactly the script tag
    full_script_gototop = "<script>\n" + gototop_match.group(1) + "</script>"
    baseof = baseof.replace(full_script_gototop, "")

lucide_script = re.search(r"    <!-- Initialize Lucide Icons -->\s*<script>(.*?)</script>", baseof, re.DOTALL)
if lucide_script:
    lucide_js = lucide_script.group(1).strip()
    baseof = baseof.replace("<script>\n" + lucide_script.group(1) + "</script>", "")

theme_toggle_func = re.search(r"    <!-- Theme Toggle Functionality -->\s*<script>(.*?)</script>", baseof, re.DOTALL)
if theme_toggle_func:
    toggle_js = theme_toggle_func.group(1).strip()
    baseof = baseof.replace("<script>\n" + theme_toggle_func.group(1) + "</script>", '<script src="/js/main.js"></script>')

test_runner_js = re.search(r"    <script>\s*// Test Runner Prompt\s*(.*?)</script>", baseof, re.DOTALL)
if test_runner_js:
    runner_js = "// Test Runner Prompt\n" + test_runner_js.group(1).strip()
    baseof = baseof.replace("<script>\n" + test_runner_js.group(1) + "</script>", "")

main_js_content = ""
if theme_toggle_func: main_js_content += toggle_js + "\n\n"
if gototop_match: main_js_content += gototop_js + "\n\n"
if test_runner_js: main_js_content += runner_js + "\n\n"

# Note: keep lucide.createIcons() where it makes sense, or inside DOMContentLoaded
main_js_content = """document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

""" + main_js_content

# 4. EXTRACT FROM solutions/single.html
sol_js_match = re.search(r"<script>\s*function copySolutionCode\(button\) {(.*?)</script>", solutions, re.DOTALL)
if sol_js_match:
    sol_js = "\nfunction copySolutionCode(button) {" + sol_js_match.group(1).strip()
    problem_utils += sol_js
    solutions = solutions.replace(sol_js_match.group(0), "")

sol_css_match = re.search(r"<style>\s*/\* Force Horizontal Scroll.*?</style>", solutions, re.DOTALL)
if sol_css_match:
    styles += "\n/* Extracted Solution CSS */\n" + sol_css_match.group(0).replace("<style>", "").replace("</style>", "").strip()
    solutions = solutions.replace(sol_css_match.group(0), "")

# 5. WRITE BACK
with open(styles_path, "w", encoding="utf-8") as f:
    f.write(styles)

with open(main_js_path, "w", encoding="utf-8") as f:
    f.write(main_js_content)

with open(baseof_path, "w", encoding="utf-8") as f:
    f.write(baseof)

with open(solutions_path, "w", encoding="utf-8") as f:
    f.write(solutions)

with open(problem_utils_path, "w", encoding="utf-8") as f:
    f.write(problem_utils)

print("Extraction completed successfully!")
