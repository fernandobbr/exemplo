/* ============================================================
   FM NOTÍCIAS — portal.js
   Motor do portal: artigo dinâmico, busca, comentários,
   contador de views, leitura mais recente.
   Depende de: js/data.js (deve ser carregado antes deste)
   ============================================================ */

/* ----------------------------------------------------------
   UTILITÁRIOS
---------------------------------------------------------- */
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  }) + ' · ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function timeAgo(iso) {
  const diff = Math.floor((Date.now() - new Date(iso)) / 1000);
  if (diff < 60)   return 'Agora mesmo';
  if (diff < 3600) return `Há ${Math.floor(diff/60)} min`;
  if (diff < 86400)return `Há ${Math.floor(diff/3600)}h`;
  return `Há ${Math.floor(diff/86400)} dias`;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}


/* ----------------------------------------------------------
   VISUALIZAÇÕES (localStorage)
---------------------------------------------------------- */
function trackView(id) {
  const key = `fm_views_${id}`;
  const v = parseInt(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, v);
  return v;
}

function getViews(id) {
  return parseInt(localStorage.getItem(`fm_views_${id}`) || FM_ARTICLES.find(a=>a.id===id)?.views || 0);
}

function getMostRead(limit = 5) {
  return [...FM_ARTICLES]
    .map(a => ({ ...a, totalViews: getViews(a.id) }))
    .sort((a, b) => b.totalViews - a.totalViews)
    .slice(0, limit);
}


/* ----------------------------------------------------------
   COMENTÁRIOS (localStorage)
---------------------------------------------------------- */
function getComments(articleId) {
  return JSON.parse(localStorage.getItem(`fm_comments_${articleId}`) || '[]');
}

function saveComment(articleId, name, text) {
  const comments = getComments(articleId);
  const comment = {
    id: Date.now(),
    name: escapeHtml(name.trim()),
    text: escapeHtml(text.trim()),
    date: new Date().toISOString(),
    likes: 0
  };
  comments.push(comment);
  localStorage.setItem(`fm_comments_${articleId}`, JSON.stringify(comments));
  return comment;
}

function likeComment(articleId, commentId) {
  const comments = getComments(articleId);
  const c = comments.find(c => c.id === commentId);
  if (c) {
    const liked = JSON.parse(localStorage.getItem('fm_liked_comments') || '[]');
    if (liked.includes(commentId)) return c.likes;
    c.likes++;
    liked.push(commentId);
    localStorage.setItem(`fm_comments_${articleId}`, JSON.stringify(comments));
    localStorage.setItem('fm_liked_comments', JSON.stringify(liked));
  }
  return c ? c.likes : 0;
}

function renderComments(articleId) {
  const container = document.getElementById('commentsList');
  const counter   = document.getElementById('commentsCount');
  if (!container) return;

  const comments = getComments(articleId);
  const liked    = JSON.parse(localStorage.getItem('fm_liked_comments') || '[]');

  if (counter) counter.textContent = comments.length;

  if (comments.length === 0) {
    container.innerHTML = '<p class="no-comments">Seja o primeiro a comentar. Sua opinião é importante!</p>';
    return;
  }

  container.innerHTML = comments.map(c => `
    <div class="comment-item" data-id="${c.id}">
      <div class="comment-avatar">${c.name.charAt(0).toUpperCase()}</div>
      <div class="comment-body">
        <div class="comment-header">
          <strong class="comment-name">${c.name}</strong>
          <span class="comment-date">${timeAgo(c.date)}</span>
        </div>
        <p class="comment-text">${c.text}</p>
        <button class="comment-like ${liked.includes(c.id) ? 'liked' : ''}"
                onclick="handleLike(${articleId}, ${c.id}, this)">
          <i class="bi bi-heart${liked.includes(c.id) ? '-fill' : ''}"></i>
          <span>${c.likes}</span>
        </button>
      </div>
    </div>
  `).reverse().join('');
}

function handleLike(articleId, commentId, btn) {
  const newCount = likeComment(articleId, commentId);
  btn.classList.add('liked');
  btn.innerHTML = `<i class="bi bi-heart-fill"></i> <span>${newCount}</span>`;
}


/* ----------------------------------------------------------
   RENDER DO CORPO DO ARTIGO
---------------------------------------------------------- */
function renderBody(blocks) {
  return blocks.map(block => {
    switch (block.type) {
      case 'p':
        return `<p>${block.text}</p>`;
      case 'h2':
        return `<h2>${block.text}</h2>`;
      case 'quote':
        return `<blockquote><p>${block.text}</p><cite>— ${block.author}</cite></blockquote>`;
      case 'img':
        const bodyImgSrc = block.seed.startsWith('img/') ? block.seed : `https://picsum.photos/seed/${block.seed}?grayscale`;
        return `
          <figure>
            <img src="${bodyImgSrc}"
                 alt="${block.caption}" loading="lazy">
            <figcaption>${block.caption}</figcaption>
          </figure>`;
      default:
        return '';
    }
  }).join('\n');
}


/* ----------------------------------------------------------
   CARREGAR ARTIGO DINÂMICO em artigo.html
---------------------------------------------------------- */
function loadArticlePage() {
  const id      = parseInt(getUrlParam('id')) || 1;
  const article = FM_ARTICLES.find(a => a.id === id);

  if (!article) {
    document.getElementById('articleContent').innerHTML =
      '<p style="padding:2rem">Artigo não encontrado. <a href="index.html">Voltar ao início</a></p>';
    return;
  }

  // Atualiza title e meta
  document.title = `${article.title} — FM Notícias`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = article.excerpt;

  // Rastreia visualização
  const views = trackView(id);

  // Breadcrumb
  const bc = document.getElementById('articleBreadcrumb');
  if (bc) {
    bc.innerHTML = `
      <ol>
        <li><a href="index.html"><i class="bi bi-house-fill"></i> Início</a></li>
        <li><a href="${article.categoryPage}">${article.categoryLabel}</a></li>
        <li>${article.title.substring(0, 50)}…</li>
      </ol>`;
  }

  // Nav — marca o item ativo correto
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === article.categoryPage) a.classList.add('active');
  });

  // Conteúdo principal do artigo
  const content = document.getElementById('articleContent');
  if (!content) return;

    const isLocal = article.imageSeed.startsWith('img/');
    content.innerHTML = `
    <header class="article-header">
      <span class="article-cat">${article.categoryLabel}</span>
      <h1 class="article-main-title">${article.title}</h1>
      <p class="article-subtitle">${article.subtitle}</p>

      <div class="article-meta-bar">
        <div class="article-author">
          <img class="author-avatar"
               src="https://picsum.photos/seed/${article.authorAvatar}?grayscale"
               alt="Foto de ${article.author}" width="80" height="80">
          <div class="author-info">
            <span class="author-name">${article.author}</span>
            <span class="article-date"><i class="bi bi-calendar3"></i> ${formatDate(article.date)}</span>
          </div>
        </div>
        <div class="article-stats">
          <span><i class="bi bi-clock"></i> ${article.readingTime} min de leitura</span>
          <span><i class="bi bi-eye"></i> ${views.toLocaleString('pt-BR')} visualizações</span>
          <span id="commentStatCount"><i class="bi bi-chat-dots"></i> <span id="statsCommentNum">0</span> comentários</span>
        </div>
      </div>

      <div class="article-toolbar">
        <div class="share-bar">
          <span class="share-label">Compartilhar:</span>
          <a class="share-btn whatsapp"
             href="https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}"
             target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp</a>
          <a class="share-btn facebook"
             href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}"
             target="_blank" rel="noopener"><i class="bi bi-facebook"></i> Facebook</a>
          <a class="share-btn twitter"
             href="https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}"
             target="_blank" rel="noopener"><i class="bi bi-twitter-x"></i> X</a>
          <button class="share-btn" id="copyLinkBtn"><i class="bi bi-link-45deg"></i> Copiar link</button>
        </div>
        <div class="font-controls" title="Tamanho da fonte">
          <span class="font-label">Fonte:</span>
          <button id="fontDecrease" aria-label="Diminuir fonte">A−</button>
          <button id="fontReset"    aria-label="Fonte padrão">A</button>
          <button id="fontIncrease" aria-label="Aumentar fonte">A+</button>
          <button class="share-btn" id="printBtn" style="margin-left:0.5rem"><i class="bi bi-printer"></i> Imprimir</button>
        </div>
      </div>
    </header>

    <figure class="article-featured-img">
      <div class="img-badge-wrapper">
        <img src="${isLocal ? article.imageSeed : 'https://picsum.photos/seed/' + article.imageSeed + '?grayscale'}"
             alt="${article.title}" width="1200" height="430" loading="eager">
        ${isLocal ? '' : '<span class="img-example-badge">EXEMPLO</span>'}
      </div>
      <figcaption>${article.imageCaption}</figcaption>
    </figure>

    <div class="article-body" id="articleBody">
      ${renderBody(article.body)}
    </div>

    <div class="article-tags">
      <span class="article-tags-label"><i class="bi bi-tags-fill"></i> Tags:</span>
      ${article.tags.map(t => `<a href="busca.html?s=${encodeURIComponent(t)}" class="tag">${t}</a>`).join('')}
    </div>

    <div class="author-box">
      <img class="author-box-avatar"
           src="https://picsum.photos/seed/${article.authorAvatar.replace('80/80','140/140')}?grayscale"
           alt="${article.author}" width="140" height="140">
      <div>
        <div class="author-box-name">${article.author}</div>
        <span class="author-box-role">${article.authorRole}</span>
        <p class="author-box-bio">${article.authorBio}</p>
      </div>
    </div>
  `;

  // Artigos relacionados
  const related = FM_ARTICLES
    .filter(a => a.id !== id && a.category === article.category)
    .slice(0, 3);

  const relContainer = document.getElementById('relatedArticles');
  if (relContainer && related.length) {
    relContainer.innerHTML = `
      <div class="section-header" style="margin-bottom:1rem">
        <h2 class="section-title">Veja também</h2>
      </div>
      <div class="related-grid">
        ${related.map(r => `
          <article class="news-card">
            <div class="news-card-img-wrap">
              <a href="${r.imageSeed.startsWith('img/') ? 'artigo.html?id=' + r.id : 'javascript:void(0)'}" 
                 style="${r.imageSeed.startsWith('img/') ? '' : 'cursor:default'}"
                 onclick="${r.imageSeed.startsWith('img/') ? '' : 'return false'}">
                <div class="img-badge-wrapper">
                  <img class="news-card-img"
                       src="${r.imageSeed.startsWith('img/') ? r.imageSeed : 'https://picsum.photos/seed/' + r.imageSeed.split('/')[0] + '/400/250?grayscale'}"
                       alt="${r.title}" width="400" height="250" loading="lazy">
                  ${r.imageSeed.startsWith('img/') ? '' : '<span class="img-example-badge" style="top:5px;right:5px;font-size:0.55rem">EXEMPLO</span>'}
                </div>
              </a>
            </div>
            <div class="news-card-body">
              <span class="article-cat">${r.categoryLabel}</span>
              <a href="${r.imageSeed.startsWith('img/') ? 'artigo.html?id=' + r.id : 'javascript:void(0)'}" 
                 class="article-title"
                 style="${r.imageSeed.startsWith('img/') ? '' : 'cursor:default'}"
                 onclick="${r.imageSeed.startsWith('img/') ? '' : 'return false'}">${r.title}</a>
              <div class="article-meta"><i class="bi bi-clock"></i> ${timeAgo(r.date)}</div>
            </div>
          </article>`).join('')}
      </div>`;
  }

  // Inicializa comentários
  renderComments(id);
  updateStatsCommentCount(id);

  // Configura controles de fonte
  initFontControls();

  // Configura copiar link
  const copyBtn = document.getElementById('copyLinkBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyBtn.innerHTML = '<i class="bi bi-check-lg"></i> Copiado!';
        setTimeout(() => { copyBtn.innerHTML = '<i class="bi bi-link-45deg"></i> Copiar link'; }, 2000);
      });
    });
  }

  // Botão imprimir
  document.getElementById('printBtn')?.addEventListener('click', () => window.print());

  // Formulário de comentários
  const form = document.getElementById('commentForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('#commentName').value.trim();
      const text = form.querySelector('#commentText').value.trim();
      if (!name || !text) return;
      saveComment(id, name, text);
      renderComments(id);
      updateStatsCommentCount(id);
      form.reset();
      document.getElementById('commentsList').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Widget mais lidas na sidebar
  renderMostRead('sidebarMostRead');
}

function updateStatsCommentCount(id) {
  const el = document.getElementById('statsCommentNum');
  if (el) el.textContent = getComments(id).length;
}


/* ----------------------------------------------------------
   CONTROLES DE FONTE
---------------------------------------------------------- */
function initFontControls() {
  const body    = document.getElementById('articleBody');
  if (!body) return;

  let size = parseInt(localStorage.getItem('fm_font_size') || '100');
  body.style.fontSize = size + '%';

  document.getElementById('fontDecrease')?.addEventListener('click', () => {
    if (size > 80) { size -= 10; body.style.fontSize = size + '%'; localStorage.setItem('fm_font_size', size); }
  });
  document.getElementById('fontIncrease')?.addEventListener('click', () => {
    if (size < 140) { size += 10; body.style.fontSize = size + '%'; localStorage.setItem('fm_font_size', size); }
  });
  document.getElementById('fontReset')?.addEventListener('click', () => {
    size = 100; body.style.fontSize = '100%'; localStorage.setItem('fm_font_size', 100);
  });
}


/* ----------------------------------------------------------
   MAIS LIDAS — widget dinâmico
---------------------------------------------------------- */
function renderMostRead(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const top = getMostRead(5);
  container.innerHTML = top.map((a, i) => `
    <div class="most-read-item">
      <span class="most-read-num">${i + 1}</span>
      <div>
        <a href="artigo.html?id=${a.id}" class="most-read-title">${a.title}</a>
        <div class="most-read-meta">
          <i class="bi bi-eye"></i> ${getViews(a.id).toLocaleString('pt-BR')} views
        </div>
      </div>
    </div>`).join('');
}


/* ----------------------------------------------------------
   BUSCA
---------------------------------------------------------- */
function searchArticles(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return FM_ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q)      ||
    a.subtitle.toLowerCase().includes(q)   ||
    a.excerpt.toLowerCase().includes(q)    ||
    a.author.toLowerCase().includes(q)     ||
    a.categoryLabel.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );
}

function loadSearchPage() {
  const query   = getUrlParam('s') || '';
  const input   = document.getElementById('searchPageInput');
  const title   = document.getElementById('searchTitle');
  const grid    = document.getElementById('searchResults');
  const noResult= document.getElementById('noResults');

  if (input) input.value = query;
  if (!query) { if (title) title.textContent = 'Digite algo para buscar'; return; }

  const results = searchArticles(query);

  if (title) title.textContent = results.length
    ? `${results.length} resultado${results.length > 1 ? 's' : ''} para "${query}"`
    : `Nenhum resultado para "${query}"`;

  if (!results.length) {
    if (noResult) noResult.style.display = 'block';
    if (grid) grid.style.display = 'none';
    return;
  }

  if (noResult) noResult.style.display = 'none';
  if (grid) {
    grid.style.display = 'grid';
    grid.innerHTML = results.map(a => `
      <article class="news-card">
        <div class="news-card-img-wrap">
          <a href="${a.imageSeed.startsWith('img/') ? 'artigo.html?id=' + a.id : 'javascript:void(0)'}"
             style="${a.imageSeed.startsWith('img/') ? '' : 'cursor:default'}"
             onclick="${a.imageSeed.startsWith('img/') ? '' : 'return false'}">
            <div class="img-badge-wrapper">
              <img class="news-card-img"
                   src="${a.imageSeed.startsWith('img/') ? a.imageSeed : 'https://picsum.photos/seed/' + a.imageSeed.split('/')[0] + '/400/250?grayscale'}"
                   alt="${a.title}" width="400" height="250" loading="lazy">
              ${a.imageSeed.startsWith('img/') ? '' : '<span class="img-example-badge" style="top:5px;right:5px;font-size:0.55rem">EXEMPLO</span>'}
            </div>
          </a>
        </div>
        <div class="news-card-body">
          <span class="article-cat">${a.categoryLabel}</span>
          <a href="${a.imageSeed.startsWith('img/') ? 'artigo.html?id=' + a.id : 'javascript:void(0)'}" 
             class="article-title"
             style="${a.imageSeed.startsWith('img/') ? '' : 'cursor:default'}"
             onclick="${a.imageSeed.startsWith('img/') ? '' : 'return false'}">${a.title}</a>
          <p style="font-size:0.82rem;color:var(--text-secondary);margin:0.4rem 0">${a.excerpt}</p>
          <div class="article-meta">
            <i class="bi bi-person"></i> ${a.author} &nbsp;·&nbsp;
            <i class="bi bi-clock"></i> ${timeAgo(a.date)}
          </div>
        </div>
      </article>`).join('');
  }

  // Busca relacionada na sidebar
  renderMostRead('sidebarMostRead');
}


/* ----------------------------------------------------------
   LINKS DE ARTIGO — atribui IDs sequenciais
   Garante que cada card na página vá para um artigo diferente
---------------------------------------------------------- */
function assignArticleLinks() {
  const selectors = [
    'article a[href="#"]',
    '.cat-hero-main a[href="#"]',
    '.cat-hero-aside-item a[href="#"]',
    '.hero-main a[href="#"]',
    '.hero-sec-item a[href="#"]',
    '.news-list-item a[href="#"]',
    '.most-read-title[href="#"]',
  ].join(', ');

  const links = document.querySelectorAll(selectors);
  links.forEach((link, index) => {
    const articleId = (index % FM_ARTICLES.length) + 1;
    link.href = `artigo.html?id=${articleId}`;
  });
}


/* ----------------------------------------------------------
   INICIALIZAÇÃO por página
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop();

  if (page === 'artigo.html' || page === '') {
    if (document.getElementById('articleContent')) loadArticlePage();
  } else if (page === 'busca.html') {
    loadSearchPage();
    // Formulário de busca na página de resultados
    const form = document.getElementById('searchPageForm');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const q = document.getElementById('searchPageInput').value.trim();
        if (q) window.location.href = `busca.html?s=${encodeURIComponent(q)}`;
      });
    }
  } else {
    // Páginas de listagem (index, categoria)
    assignArticleLinks();
    renderMostRead('sidebarMostRead');
  }
});
