/**
 * Agility Planos – PWA privada
 * Parte 1: Estructura base + navegación + UI
 * (Drive + OCR llegarán en partes siguientes)
 */

(function () {
  'use strict';

  // ---------- Estado simple ----------
  const state = {
    currentView: 'inbox',
    driveConnected: false,
    // Más adelante: lista de planos, etc.
  };

  // ---------- Elementos DOM ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const sidebar = $('#sidebar');
  const overlay = $('#sidebar-overlay');
  const btnMenu = $('#btn-menu');
  const btnCloseSidebar = $('#btn-close-sidebar');
  const navItems = $$('.nav-item');
  const views = $$('.view');
  const fileInput = $('#file-input');
  const btnImport = $('#btn-import');
  const modal = $('#modal-validacion');
  const btnCloseModal = $('#btn-close-modal');
  const driveStatus = $('#drive-status');

  // ---------- Navegación ----------
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  }

  function switchView(viewName) {
    state.currentView = viewName;

    views.forEach((v) => v.classList.remove('active'));
    const target = $(`#view-${viewName}`);
    if (target) target.classList.add('active');

    navItems.forEach((item) => {
      item.classList.toggle('active', item.dataset.view === viewName);
    });

    closeSidebar();
  }

  // ---------- Eventos ----------
  btnMenu.addEventListener('click', openSidebar);
  btnCloseSidebar.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      if (view) switchView(view);
    });
  });

  // Importar fotos (por ahora solo abre el selector)
  btnImport.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    console.log(`[Inbox] ${files.length} archivo(s) seleccionados:`, files.map(f => f.name));
    // TODO Parte 2/3: procesar y mostrar en la lista
    alert(`Has seleccionado ${files.length} foto(s).\n\nEn la siguiente parte conectaremos el procesamiento y Drive.`);
    fileInput.value = ''; // reset
  });

  // Modal (por ahora solo cerrar)
  btnCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Cerrar modal con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });

  // Botón conectar Drive (placeholder)
  const btnConnectDrive = $('#btn-connect-drive');
  if (btnConnectDrive) {
    btnConnectDrive.addEventListener('click', () => {
      alert('La conexión con Google Drive se implementará en la Parte 2.\n\nNecesitarás crear un proyecto en Google Cloud Console y obtener un Client ID.');
    });
  }

  // ---------- Service Worker (registro) ----------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then((reg) => console.log('[SW] Registrado:', reg.scope))
        .catch((err) => console.warn('[SW] Error de registro:', err));
    });
  }

  // ---------- Init ----------
  console.log('Agility Planos v0.1 – Parte 1 lista');
  switchView('inbox');
})();
