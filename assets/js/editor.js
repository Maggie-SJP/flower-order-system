(function () {
  const mainEl = document.getElementById("page-main");
  if (!mainEl || document.body.dataset.noEdit === "true") return;

  const editKey = "pageEdits:" + location.pathname;
  const saved = localStorage.getItem(editKey);
  if (saved) mainEl.innerHTML = saved;

  const active = localStorage.getItem("editModeActive") === "true";
  if (!active) return;

  let selectedEl = null;

  function selectElement(el) {
    if (selectedEl) selectedEl.classList.remove("editor-selected");
    selectedEl = el;
    if (selectedEl) selectedEl.classList.add("editor-selected");
  }

  mainEl.addEventListener("click", (e) => {
    const target = e.target.closest(".card, .hero, .journey-step, .callout, .checker-box, .quiz-question");
    if (target && mainEl.contains(target)) selectElement(target);
  });

  mainEl.setAttribute("contenteditable", "true");

  const toolbar = document.createElement("div");
  toolbar.className = "editor-toolbar";
  toolbar.innerHTML = `
    <span class="et-label">Edit Mode</span>
    <button type="button" class="btn btn-ghost" id="et-add-box">+ Add Box</button>
    <select id="et-font" title="Font family">
      <option value="">Font</option>
      <option value="Inter, sans-serif">Inter</option>
      <option value="Georgia, serif">Georgia</option>
      <option value="'Courier New', monospace">Courier New</option>
      <option value="Verdana, sans-serif">Verdana</option>
      <option value="'Comic Sans MS', cursive">Comic Sans</option>
    </select>
    <select id="et-size" title="Text size">
      <option value="">Size</option>
      <option value="2">Small</option>
      <option value="3">Normal</option>
      <option value="4">Large</option>
      <option value="5">X-Large</option>
      <option value="6">XX-Large</option>
    </select>
    <input type="color" id="et-color" title="Text colour" value="#1e2438" />
    <input type="color" id="et-box-bg" title="Selected box background" value="#ffffff" />
    <button type="button" class="btn btn-ghost" id="et-done">Done Editing</button>
    <button type="button" class="btn btn-primary" id="et-save">Save Changes</button>
  `;
  document.body.appendChild(toolbar);

  const hint = document.createElement("div");
  hint.className = "editor-hint";
  hint.textContent = "Click text to type. Select text, then use Font/Size/Colour. Click a box to set its background.";
  document.body.appendChild(hint);

  toolbar.querySelector("#et-add-box").addEventListener("click", () => {
    const box = document.createElement("div");
    box.className = "card";
    box.innerHTML = "<h4>New box</h4><p>Click to edit this text.</p>";
    const footer = mainEl.querySelector("footer.site-footer");
    if (footer) mainEl.insertBefore(box, footer);
    else mainEl.appendChild(box);
    selectElement(box);
  });

  toolbar.querySelector("#et-font").addEventListener("change", (e) => {
    if (e.target.value) document.execCommand("fontName", false, e.target.value);
    e.target.value = "";
  });

  toolbar.querySelector("#et-size").addEventListener("change", (e) => {
    if (e.target.value) document.execCommand("fontSize", false, e.target.value);
    e.target.value = "";
  });

  toolbar.querySelector("#et-color").addEventListener("input", (e) => {
    document.execCommand("foreColor", false, e.target.value);
  });

  toolbar.querySelector("#et-box-bg").addEventListener("input", (e) => {
    if (selectedEl) selectedEl.style.backgroundColor = e.target.value;
  });

  toolbar.querySelector("#et-save").addEventListener("click", () => {
    const clone = mainEl.cloneNode(true);
    clone.querySelectorAll(".editor-selected").forEach((el) => el.classList.remove("editor-selected"));
    localStorage.setItem(editKey, clone.innerHTML);
    hint.textContent = "Saved! Your changes will show next time this page loads on this device.";
    setTimeout(() => {
      hint.textContent = "Click text to type. Select text, then use Font/Size/Colour. Click a box to set its background.";
    }, 2500);
  });

  toolbar.querySelector("#et-done").addEventListener("click", () => {
    localStorage.setItem("editModeActive", "false");
    location.reload();
  });
})();
