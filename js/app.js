/**
 * =============================================
 * PRODOTTI DEL TAVOLIERE — Logica Principale
 * =============================================
 * 
 * Dipende da: js/config.js (caricato prima nel HTML)
 */

// ---- Stato dell'applicazione ----
const state = {
  olioSelectedIndex: 0,
  taralliSelectedIndex: 0,
};

// ---- SVG Icons ----
const ICONS = {
  whatsapp: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  truck: `🚚`,
  phone: `<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
};

// ---- Utility: Formatta prezzo ----
function formatPrice(price) {
  return '€' + price.toFixed(2).replace('.', ',');
}

// ---- Utility: Genera link WhatsApp ----
function generateWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

// ---- Genera messaggio ordine olio ----
function generateOlioMessage(option) {
  return `Buongiorno, vorrei ordinare:

Prodotto: ${CONFIG.olio.nome}
Quantità: ${option.litri} ${CONFIG.olio.unitaMisura}
Numero ${CONFIG.olio.unitaPlurale}: ${option.latte}
Totale: ${formatPrice(option.prezzo)}

Vorrei procedere con l'ordine.`;
}

// ---- Genera messaggio ordine taralli ----
function generateTaralliMessage(option) {
  return `Buongiorno, vorrei ordinare:

Prodotto: ${CONFIG.taralli.nome}
Variante: ${option.nome}
Peso: ${option.peso}
Totale: ${formatPrice(option.prezzo)}

Vorrei procedere con l'ordine.`;
}

// ---- Render: Pricing Options Olio ----
function renderOlioPricing() {
  const container = document.getElementById('olio-pricing-options');
  if (!container) return;

  container.innerHTML = '';

  CONFIG.olio.opzioni.forEach((opt, index) => {
    const div = document.createElement('div');
    div.className = `pricing-option${index === state.olioSelectedIndex ? ' selected' : ''}${opt.badge ? ' has-badge' : ''}`;
    div.setAttribute('data-index', index);
    div.setAttribute('role', 'radio');
    div.setAttribute('aria-checked', index === state.olioSelectedIndex);
    div.setAttribute('tabindex', '0');

    let badgeHTML = '';
    if (opt.badge) {
      badgeHTML = `<span class="pricing-badge">${opt.badge}</span>`;
    }

    let savingHTML = '';
    if (opt.risparmio) {
      savingHTML = `<span class="pricing-saving">Risparmia ${formatPrice(opt.risparmio)}</span>`;
    }

    let originalPriceHTML = '';
    if (opt.prezzoOriginale) {
      originalPriceHTML = `<span class="pricing-price-original">${formatPrice(opt.prezzoOriginale)}</span>`;
    }

    let shippingHTML = '';
    if (opt.spedizioneGratuita) {
      shippingHTML = `<span class="pricing-shipping">${ICONS.truck} Spedizione Gratuita</span>`;
    }

    const qtyLabel = opt.latte === 1
      ? `1 ${CONFIG.olio.unitaSingola} di olio`
      : `Acquista ${opt.latte} ${CONFIG.olio.unitaPlurale}`;

    div.innerHTML = `
      ${badgeHTML}
      <div class="pricing-radio"></div>
      <div class="pricing-details">
        <div class="pricing-details-top">
          <span class="pricing-qty">${qtyLabel}</span>
          <span class="pricing-litri">• ${opt.litri} ${CONFIG.olio.unitaMisura}</span>
        </div>
        <div class="pricing-details-bottom">
          ${shippingHTML}
          ${savingHTML}
        </div>
      </div>
      <div class="pricing-price-col">
        <div class="pricing-price">${formatPrice(opt.prezzo)}</div>
        ${originalPriceHTML}
      </div>
    `;

    div.addEventListener('click', () => {
      state.olioSelectedIndex = index;
      renderOlioPricing();
    });

    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        state.olioSelectedIndex = index;
        renderOlioPricing();
      }
    });

    container.appendChild(div);
  });
}

// ---- Render: Pricing Options Taralli ----
function renderTaralliPricing() {
  const container = document.getElementById('taralli-pricing-options');
  if (!container) return;

  container.innerHTML = '';

  CONFIG.taralli.opzioni.forEach((opt, index) => {
    const div = document.createElement('div');
    div.className = `pricing-option${index === state.taralliSelectedIndex ? ' selected' : ''}${opt.badge ? ' has-badge' : ''}`;
    div.setAttribute('data-index', index);
    div.setAttribute('role', 'radio');
    div.setAttribute('aria-checked', index === state.taralliSelectedIndex);
    div.setAttribute('tabindex', '0');

    let badgeHTML = '';
    if (opt.badge) {
      badgeHTML = `<span class="pricing-badge">${opt.badge}</span>`;
    }

    let savingHTML = '';
    if (opt.risparmio) {
      savingHTML = `<span class="pricing-saving">Risparmia ${formatPrice(opt.risparmio)}</span>`;
    }

    let originalPriceHTML = '';
    if (opt.prezzoOriginale) {
      originalPriceHTML = `<span class="pricing-price-original">${formatPrice(opt.prezzoOriginale)}</span>`;
    }

    let shippingHTML = '';
    if (opt.spedizioneGratuita) {
      shippingHTML = `<span class="pricing-shipping">${ICONS.truck} Spedizione Gratuita</span>`;
    }

    div.innerHTML = `
      ${badgeHTML}
      <div class="pricing-radio"></div>
      <div class="pricing-details">
        <div class="pricing-details-top">
          <span class="pricing-qty">${opt.nome}</span>
          <span class="pricing-litri">• ${opt.peso}</span>
        </div>
        <div class="pricing-details-bottom">
          ${shippingHTML}
          ${savingHTML}
        </div>
      </div>
      <div class="pricing-price-col">
        <div class="pricing-price">${formatPrice(opt.prezzo)}</div>
        ${originalPriceHTML}
      </div>
    `;

    div.addEventListener('click', () => {
      state.taralliSelectedIndex = index;
      renderTaralliPricing();
    });

    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        state.taralliSelectedIndex = index;
        renderTaralliPricing();
      }
    });

    container.appendChild(div);
  });
}

// ---- WhatsApp Click Handlers ----
function openWhatsAppOlio() {
  const option = CONFIG.olio.opzioni[state.olioSelectedIndex];
  const message = generateOlioMessage(option);
  window.open(generateWhatsAppLink(message), '_blank');
}

function openWhatsAppTaralli() {
  const option = CONFIG.taralli.opzioni[state.taralliSelectedIndex];
  const message = generateTaralliMessage(option);
  window.open(generateWhatsAppLink(message), '_blank');
}

function openWhatsAppGeneric() {
  const message = 'Buongiorno, vorrei avere informazioni sui vostri prodotti.';
  window.open(generateWhatsAppLink(message), '_blank');
}

// ---- Header Scroll Effect ----
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ---- Mobile Menu ----
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ---- Fade-in on scroll ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ---- Populate Footer Contacts ----
function initFooterContacts() {
  const phoneEl = document.getElementById('footer-phone');
  const emailEl = document.getElementById('footer-email');
  const igEl = document.getElementById('footer-instagram');
  const fbEl = document.getElementById('footer-facebook');

  if (phoneEl) {
    phoneEl.href = `tel:${CONFIG.contatti.telefono.replace(/\s/g, '')}`;
    phoneEl.innerHTML = `${ICONS.phone}<span>${CONFIG.contatti.telefono}</span>`;
  }
  if (emailEl) {
    emailEl.href = `mailto:${CONFIG.contatti.email}`;
    emailEl.innerHTML = `${ICONS.mail}<span>${CONFIG.contatti.email}</span>`;
  }
  if (igEl) igEl.href = CONFIG.contatti.instagram;
  if (fbEl) fbEl.href = CONFIG.contatti.facebook;
}

// ---- Initialize Everything ----
document.addEventListener('DOMContentLoaded', () => {
  renderOlioPricing();
  renderTaralliPricing();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initFooterContacts();
});
