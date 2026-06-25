'use strict';

/* ── icons ── */
const ICONS = {
  "check": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg>`,
  "folder-open": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"/></svg>`,
  "folder-plus": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>`,
  "menu-2": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>`,
  "pencil": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>`,
  "photo": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>`,
  "plus": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg>`,
  "settings": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>`,
  "shopping-bag": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304"/><path d="M9 11v-5a3 3 0 0 1 6 0v5"/></svg>`,
  "trash": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>`,
  "upload": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/></svg>`,
  "download": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/></svg>`,
  "x": `<svg class="ti-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>`,
};

function icon(name, style) {
  var s = ICONS[name] || '';
  if (!style) return s;
  return s.replace('class="ti-svg"', 'class="ti-svg" style="' + style + '"');
}

/* ── state ── */
const COLORS = ['#E24B4A','#378ADD','#1D9E75','#BA7517','#7F77DD','#D4537E','#E67E22','#2ECC71'];

let state = {
  folders: [],
  activeId: null,
  nextId: 10
};

/* ── storage (localStorage for PWA) ── */
function save() {
  try { localStorage.setItem('pwa_sl_state', JSON.stringify(state)); } catch(e) {}
}

function load() {
  try {
    const d = localStorage.getItem('pwa_sl_state');
    if (d) state = JSON.parse(d);
  } catch(e) {}
}

/* ── helpers ── */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function activeFolder() { return state.folders.find(f => f.id === state.activeId); }
function makePh() {
  const d = document.createElement('div');
  d.className = 'p-img-ph';
  d.innerHTML = icon('photo');
  return d;
}

/* ── render ── */
function renderSidebar() {
  const el = $('folderList');
  if (!state.folders.length) {
    el.innerHTML = '<div class="no-folders">Aucun dossier</div>';
    return;
  }
  el.innerHTML = state.folders.map(f => {
    const rem = f.products.filter(p => !p.checked).length;
    return `<div class="folder-item${f.id === state.activeId ? ' active' : ''}" data-action="selectFolder" data-id="${f.id}">
      <div class="f-dot" style="background:${esc(f.color)}"></div>
      <span class="f-name">${esc(f.name)}</span>
      <span class="f-count">${rem}</span>
      <span class="f-edit" data-action="editFolder" data-id="${f.id}">${icon('pencil')}</span>
    </div>`;
  }).join('');
}

function renderMain() {
  const main = $('main');
  const f = activeFolder();
  if (!f) {
    main.innerHTML = `<div class="empty">
      ${icon('folder-open')}
      <p>Aucun dossier pour l'instant</p>
      <button class="btn-primary-sm" data-action="newFolder">${icon('folder-plus')} Créer un dossier</button>
    </div>`;
    return;
  }

  const total     = f.products.reduce((s, p) => s + p.price, 0);
  const remaining = f.products.filter(p => !p.checked).reduce((s, p) => s + p.price, 0);
  const bought    = f.products.filter(p => p.checked).length;
  const nb        = f.products.length;

  const productsHtml = nb === 0
    ? `<div class="empty">${icon('shopping-bag')}<p>Aucun produit — ajoutez-en ci-dessous</p></div>`
    : f.products.map(p => {
        const imgPart = p.img
          ? `<img class="p-img" src="${esc(p.img)}" alt="" loading="lazy">`
          : `<div class="p-img-ph">${icon('photo')}</div>`;
        return `<div class="product-card${p.checked ? ' bought' : ''}">
          <div class="p-check${p.checked ? ' done' : ''}" style="${p.checked ? `--accent-color:${esc(f.color)}` : ''}" data-action="toggleProduct" data-id="${p.id}" role="checkbox" aria-checked="${p.checked}" aria-label="Marquer comme acheté">
            ${p.checked ? icon('check') : ''}
          </div>
          ${imgPart}
          <div class="p-info">
            <div class="p-name">${esc(p.name)}</div>
            ${p.url ? `<a class="p-url" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.url)}</a>` : ''}
          </div>
          <div class="p-price">${p.price.toFixed(2)} €</div>
          <button class="p-edit-btn" data-action="editProduct" data-id="${p.id}" title="Modifier">${icon('pencil')}</button>
          <button class="p-del" data-action="deleteProduct" data-id="${p.id}" title="Supprimer">${icon('trash')}</button>
        </div>`;
      }).join('');

  main.innerHTML = `
    <div class="main-header">
      <button class="hamburger" data-action="openSidebar" aria-label="Menu">${icon('menu-2')}</button>
      <div class="color-strip" style="background:${esc(f.color)}"></div>
      <div class="list-title-wrap">
        <div class="list-title">${esc(f.name)}</div>
        <div class="list-subtitle">${nb} produit${nb !== 1 ? 's' : ''} · ${bought} acheté${bought !== 1 ? 's' : ''}</div>
      </div>
      <button class="header-btn" data-action="editFolder" data-id="${f.id}" title="Modifier">${icon('settings')}</button>
    </div>
    <div class="summary">
      <div class="summary-chip">Total : <b>${total.toFixed(2)} €</b></div>
      <div class="summary-chip">Dépensé : <b>${(total - remaining).toFixed(2)} €</b></div>
      <div class="summary-total" style="color:${esc(f.color)}">
        À payer : <b>${remaining.toFixed(2)} €</b>
        <span class="s-remaining">/ ${total.toFixed(2)} €</span>
      </div>
    </div>
    <div class="products" id="productsList">${productsHtml}</div>
    <div class="add-form">
      <div class="add-grid">
        <input id="pName"  placeholder="Nom du produit *" autocomplete="off" />
        <input id="pPrice" placeholder="Prix €*" type="number" step="0.01" min="0" inputmode="decimal" />
        <input id="pUrl"   placeholder="URL du produit (optionnel)" class="span2" type="url" />
        <input id="pImg"   placeholder="URL de l'image (optionnel)" class="span2" type="url" />
        <button class="add-btn" data-action="addProduct">
          ${icon('plus')} Ajouter
        </button>
      </div>
    </div>`;

  main.querySelectorAll('img.p-img').forEach(img => {
    img.onerror = function() { this.replaceWith(makePh()); };
  });
}

function render() { renderSidebar(); renderMain(); }

/* ── actions ── */
function selectFolder(id) { state.activeId = id; render(); closeSidebar(); }

function toggleProduct(pid) {
  const f = activeFolder();
  const p = f && f.products.find(x => x.id === pid);
  if (p) { p.checked = !p.checked; save(); render(); }
}

function deleteProduct(pid) {
  const f = activeFolder();
  if (!f) return;
  f.products = f.products.filter(p => p.id !== pid);
  save(); render();
}

function addProduct() {
  const name  = $('pName').value.trim();
  const raw   = $('pPrice').value;
  const price = parseFloat(raw);
  const url   = $('pUrl').value.trim();
  const img   = $('pImg').value.trim();
  if (!name || raw === '' || isNaN(price) || price < 0) { $('pName').focus(); return; }
  const f = activeFolder();
  if (!f) return;
  f.products.push({ id: ++state.nextId, name, price, url, img, checked: false });
  save(); render();
}

/* ── folder modal ── */
let modalColor = COLORS[0];

function openFolderModal(folderId) {
  const f = folderId ? state.folders.find(x => x.id === folderId) : null;
  modalColor = f ? f.color : COLORS[0];
  const swatches = COLORS.map(c =>
    `<div class="swatch${c === modalColor ? ' sel' : ''}" style="background:${c}" data-action="pickColor" data-color="${c}"></div>`
  ).join('');
  const deleteBtn = f
    ? `<button class="btn-danger" data-action="deleteFolder" data-id="${f.id}">${icon('trash', 'font-size:14px;vertical-align:-2px')} Supprimer</button>`
    : '';
  $('modalRoot').innerHTML = `<div class="modal-overlay" data-action="closeModalOverlay">
    <div class="modal">
      <h2>${f ? 'Modifier la liste' : 'Nouvelle liste'}</h2>
      <label>Nom</label>
      <input type="text" id="mName" value="${f ? esc(f.name) : ''}" placeholder="Ex : Équipement moto" autocomplete="off" />
      <label>Couleur</label>
      <div class="color-swatches">${swatches}</div>
      <div class="modal-actions">
        ${deleteBtn}
        <button class="btn-cancel" data-action="closeModal">Annuler</button>
        <button class="btn-primary" data-action="saveFolder" data-id="${folderId || ''}">${f ? 'Enregistrer' : 'Créer'}</button>
      </div>
    </div>
  </div>`;
  setTimeout(() => { const i = $('mName'); if (i) i.focus(); }, 50);
}

function pickColor(c) {
  modalColor = c;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('sel'));
  const t = document.querySelector(`.swatch[data-color="${c}"]`);
  if (t) t.classList.add('sel');
}

function saveFolder(folderId) {
  const name = $('mName') && $('mName').value.trim();
  if (!name) { if ($('mName')) $('mName').focus(); return; }
  const id = folderId ? parseInt(folderId) : null;
  if (id) {
    const f = state.folders.find(x => x.id === id);
    if (f) { f.name = name; f.color = modalColor; }
  } else {
    const newF = { id: ++state.nextId, name, color: modalColor, products: [] };
    state.folders.push(newF);
    state.activeId = newF.id;
  }
  save(); closeModal(); render();
}

function deleteFolder(id) {
  showConfirm('Supprimer ce dossier et tous ses produits ?', function() {
    state.folders = state.folders.filter(f => f.id !== id);
    if (state.activeId === id) state.activeId = state.folders[0] ? state.folders[0].id : null;
    save(); closeModal(); render();
  });
}

/* ── edit product modal ── */
function openEditProductModal(pid) {
  const f = activeFolder();
  const p = f && f.products.find(x => x.id === pid);
  if (!p) return;
  $('modalRoot').innerHTML = `<div class="modal-overlay" data-action="closeModalOverlay">
    <div class="modal modal-wide">
      <h2>${icon('pencil', 'font-size:17px;vertical-align:-3px;margin-right:6px')}Modifier le produit</h2>
      <div class="edit-preview">
        <div class="preview-img-wrap" id="editImgWrap">
          ${p.img ? `<img id="editPreviewImg" src="${esc(p.img)}" alt="" style="width:100%;height:100%;object-fit:contain">` : icon('photo', 'font-size:32px;color:var(--text-3)')}
        </div>
        <div class="preview-fields">
          <div class="preview-field"><label>Nom</label><input type="text" id="editName" value="${esc(p.name)}" autocomplete="off" /></div>
          <div class="preview-field"><label>Prix (€)</label><input type="number" id="editPrice" value="${p.price}" step="0.01" min="0" inputmode="decimal" /></div>
          <div class="preview-field"><label>URL produit</label><input type="url" id="editUrl" value="${esc(p.url || '')}" placeholder="https://..." /></div>
          <div class="preview-field"><label>URL image</label><input type="url" id="editImg" value="${esc(p.img || '')}" placeholder="https://..." /></div>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-cancel" data-action="closeModal">Annuler</button>
        <button class="btn-primary" data-action="saveEditProduct" data-id="${pid}">${icon('check', 'font-size:14px;vertical-align:-2px')} Enregistrer</button>
      </div>
    </div>
  </div>`;
  const editImgInput = $('editImg');
  if (editImgInput) editImgInput.addEventListener('input', function() { updateEditImg(this.value); });
  const previewImg = $('editPreviewImg');
  if (previewImg) previewImg.onerror = function() { $('editImgWrap').innerHTML = icon('photo', 'font-size:32px;color:var(--text-3)'); };
  setTimeout(() => { if ($('editName')) $('editName').focus(); }, 50);
}

function updateEditImg(val) {
  const wrap = $('editImgWrap');
  if (!wrap) return;
  if (val) {
    const img = document.createElement('img');
    img.id = 'editPreviewImg'; img.src = val; img.alt = '';
    img.style.cssText = 'width:100%;height:100%;object-fit:contain';
    img.onerror = function() { wrap.innerHTML = icon('photo', 'font-size:32px;color:var(--text-3)'); };
    wrap.innerHTML = ''; wrap.appendChild(img);
  } else {
    wrap.innerHTML = icon('photo', 'font-size:32px;color:var(--text-3)');
  }
}

function saveEditProduct(pid) {
  const name  = ($('editName')  && $('editName').value.trim())  || '';
  const price = parseFloat(($('editPrice') && $('editPrice').value) || '0');
  const url   = ($('editUrl')   && $('editUrl').value.trim())   || '';
  const img   = ($('editImg')   && $('editImg').value.trim())   || '';
  if (!name) { if ($('editName')) $('editName').focus(); return; }
  const f = activeFolder(); const p = f && f.products.find(x => x.id === pid);
  if (!p) return;
  p.name = name; p.price = isNaN(price) ? 0 : price; p.url = url; p.img = img;
  save(); closeModal(); render();
}

/* ── dialogs ── */
function showConfirm(message, onConfirm) {
  const prev = $('modalRoot').innerHTML;
  $('modalRoot').innerHTML = `<div class="modal-overlay" style="z-index:200">
    <div class="modal dialog-modal">
      <p class="dialog-msg">${esc(message)}</p>
      <div class="modal-actions">
        <button class="btn-cancel" id="dlgCancel">Annuler</button>
        <button class="btn-danger" id="dlgOk">Confirmer</button>
      </div>
    </div>
  </div>`;
  $('dlgCancel').addEventListener('click', function() { $('modalRoot').innerHTML = prev; });
  $('dlgOk').addEventListener('click', function() { $('modalRoot').innerHTML = ''; onConfirm(); });
}

function showAlert(message) {
  $('modalRoot').innerHTML = `<div class="modal-overlay" style="z-index:200">
    <div class="modal dialog-modal">
      <p class="dialog-msg">${esc(message)}</p>
      <div class="modal-actions"><button class="btn-primary" id="dlgAlertOk">OK</button></div>
    </div>
  </div>`;
  $('dlgAlertOk').addEventListener('click', function() { $('modalRoot').innerHTML = ''; });
}

function closeModal() { $('modalRoot').innerHTML = ''; }

/* ── sidebar ── */
function openSidebar() {
  $('sidebar').classList.add('open');
  $('sidebarOverlay').classList.add('visible');
}
function closeSidebar() {
  $('sidebar').classList.remove('open');
  $('sidebarOverlay').classList.remove('visible');
}

/* ── export / import ── */
function exportData() {
  const json = JSON.stringify(state, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'listes-achats-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json,application/json';
  input.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!parsed.folders || !Array.isArray(parsed.folders)) throw new Error('Format invalide');
        applyImport(parsed);
      } catch(err) {
        showAlert('Erreur import : ' + err.message);
      }
    };
    reader.readAsText(file);
  });
  document.body.appendChild(input); input.click();
  setTimeout(function() { if (input.parentNode) input.parentNode.removeChild(input); }, 5000);
}

function applyImport(parsed) {
  let maxId = parsed.nextId || 0;
  parsed.folders.forEach(function(f) {
    if (f.id > maxId) maxId = f.id;
    if (!Array.isArray(f.products)) f.products = [];
    f.products.forEach(function(p) {
      if (p.id > maxId) maxId = p.id;
      if (!('url'     in p)) p.url     = '';
      if (!('img'     in p)) p.img     = '';
      if (!('checked' in p)) p.checked = false;
    });
  });
  parsed.nextId = maxId + 1;
  const validActive = parsed.folders.some(function(f) { return f.id === parsed.activeId; });
  if (!validActive && parsed.folders.length > 0) parsed.activeId = parsed.folders[0].id;
  state = parsed; save(); render();
}

/* ── event delegation ── */
document.addEventListener('click', function(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  const id     = el.dataset.id ? parseInt(el.dataset.id) : null;
  switch (action) {
    case 'selectFolder':      e.stopPropagation(); selectFolder(id); break;
    case 'editFolder':        e.stopPropagation(); openFolderModal(id); break;
    case 'toggleProduct':     toggleProduct(id); break;
    case 'editProduct':       openEditProductModal(id); break;
    case 'deleteProduct':     deleteProduct(id); break;
    case 'addProduct':        addProduct(); break;
    case 'openSidebar':       openSidebar(); break;
    case 'saveFolder':        saveFolder(el.dataset.id || null); break;
    case 'deleteFolder':      deleteFolder(id); break;
    case 'pickColor':         pickColor(el.dataset.color); break;
    case 'saveEditProduct':   saveEditProduct(id); break;
    case 'closeModal':        closeModal(); break;
    case 'closeModalOverlay': if (e.target === el) closeModal(); break;
    case 'newFolder':         openFolderModal(null); break;
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ── sidebar overlay ── */
$('sidebarOverlay').addEventListener('click', closeSidebar);

/* ── static buttons ── */
$('newFolderBtn').addEventListener('click', function() { openFolderModal(null); });
$('newFolderBtn').innerHTML = icon('folder-plus') + ' Nouveau dossier';
$('exportBtn').addEventListener('click', exportData);
$('exportBtn').innerHTML = icon('download') + ' Exporter';
$('importBtn').addEventListener('click', importData);
$('importBtn').innerHTML = icon('upload') + ' Importer';

/* ── service worker registration ── */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(function() {});
}

/* ── init ── */
load();
render();
