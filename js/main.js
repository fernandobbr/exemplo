/* ============================================================
   FM NOTÍCIAS — main.js
   Dark mode | Menu mobile | Ticker duplicado | Busca
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     DARK MODE
  ---------------------------------------------------------- */
  const toggleBtn = document.getElementById('darkToggle');
  const body = document.body;
  const saved = localStorage.getItem('fm-theme') || 'light';

  body.dataset.theme = saved;
  syncToggleLabel(saved);

  toggleBtn.addEventListener('click', () => {
    const next = body.dataset.theme === 'light' ? 'dark' : 'light';
    body.dataset.theme = next;
    localStorage.setItem('fm-theme', next);
    syncToggleLabel(next);
  });

  function syncToggleLabel(theme) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = theme === 'light'
      ? '<i class="bi bi-moon-fill"></i> Modo Escuro'
      : '<i class="bi bi-sun-fill"></i> Modo Claro';
  }


  /* ----------------------------------------------------------
     MENU MOBILE
  ---------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });

    navMenu.querySelectorAll('.has-dropdown').forEach(li => {
      li.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.stopPropagation();
          li.classList.toggle('open');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }


  /* ----------------------------------------------------------
     TICKER — duplica os itens para loop contínuo
  ---------------------------------------------------------- */
  const track = document.querySelector('.ticker-track');
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }


  /* ----------------------------------------------------------
     BUSCA — abre/fecha campo e redireciona para busca.html
  ---------------------------------------------------------- */
  const searchBtn   = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const open = searchInput.style.width === '200px';
      searchInput.style.width  = open ? '0' : '200px';
      searchInput.style.padding = open ? '0' : '';
      if (!open) searchInput.focus();
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = `busca.html?s=${encodeURIComponent(searchInput.value.trim())}`;
      }
      if (e.key === 'Escape') {
        searchInput.style.width = '0';
        searchInput.style.padding = '0';
      }
    });
  }


  /* ----------------------------------------------------------
     NEWSLETTER — validação simples
  ---------------------------------------------------------- */
  document.querySelectorAll('[id="newsletterForm"]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';
      if (!email || !email.includes('@')) {
        input.style.borderColor = 'var(--accent)';
        input.placeholder = 'Informe um e-mail válido';
        input.focus();
        return;
      }
      form.innerHTML = '<p style="font-size:0.82rem;color:var(--text-secondary);padding:0.5rem 0;display:flex;align-items:center;gap:0.4rem"><i class="bi bi-check-circle-fill" style="color:#2d8a4e"></i> Inscrição realizada! Obrigado.</p>';
    });
  });


  /* ----------------------------------------------------------
     DATA DINÂMICA na top bar
  ---------------------------------------------------------- */
  const dateEl = document.getElementById('currentDate');
  if (dateEl) {
    const now = new Date();
    const opts = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('pt-BR', opts);
  }


  /* ----------------------------------------------------------
     COPIAR LINK do artigo
  ---------------------------------------------------------- */
  const copyBtn = document.getElementById('copyLinkBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyBtn.innerHTML = '<i class="bi bi-check-lg"></i> Copiado!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="bi bi-link-45deg"></i> Copiar link';
        }, 2000);
      });
    });
  }


  /* ----------------------------------------------------------
     LINKS DE ARTIGO — redireciona href="#" dentro de artigos.
     portal.js (quando carregado) sobrescreve com IDs reais.
  ---------------------------------------------------------- */
  const articleLinkSelectors = [
    'article a[href="#"]',
    '.cat-hero-main a[href="#"]',
    '.cat-hero-aside-item a[href="#"]',
    '.hero-main a[href="#"]',
    '.hero-sec-item a[href="#"]',
    '.news-list-item a[href="#"]',
    '.most-read-title[href="#"]',
  ].join(', ');

  document.querySelectorAll(articleLinkSelectors).forEach(link => {
    link.href = 'artigo.html';
  });


  /* ----------------------------------------------------------
     BARRA DE PROGRESSO DE LEITURA
  ---------------------------------------------------------- */
  const progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
    }, { passive: true });
  }


  /* ----------------------------------------------------------
     BOTÃO VOLTAR AO TOPO
  ---------------------------------------------------------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ----------------------------------------------------------
     BANNER DE COOKIES
  ---------------------------------------------------------- */
  const cookieBanner = document.getElementById('cookieConsent');
  const cookieBtn    = document.getElementById('cookieAccept');
  if (cookieBanner) {
    if (localStorage.getItem('fm-cookies-accepted')) {
      cookieBanner.classList.add('hidden');
    }
    if (cookieBtn) {
      cookieBtn.addEventListener('click', () => {
        localStorage.setItem('fm-cookies-accepted', '1');
        cookieBanner.classList.add('hidden');
      });
    }
  }


  /* ----------------------------------------------------------
     DESATIVA LINKS em cards de exemplo (badge EXEMPLO visível)
     Roda após portal.js poder ter atribuído links aos cards
  ---------------------------------------------------------- */
  function disableExampleCards() {
    document.querySelectorAll('.img-example-badge').forEach(badge => {
      const card = badge.closest('.news-card, .news-list-item, .cat-hero-aside-item');
      if (card) {
        card.style.cursor = 'default';
        card.querySelectorAll('a').forEach(link => {
          link.href = 'javascript:void(0)';
          link.style.cursor = 'default';
          link.onclick = (e) => e.preventDefault();
        });
      }
    });
  }

  disableExampleCards();
  setTimeout(disableExampleCards, 300);

});
