/**
 * CurioComics Web Application Engine
 * Course: CXT453 - Design Process and Perspective
 * Roll No: 20
 */

// Web Audio API Comic Sound Effects Synthesizer (Zero External Dependencies)
const ComicSFX = {
  ctx: null,
  enabled: true,

  init() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      const saved = localStorage.getItem("curio_sfx");
      this.enabled = saved !== "false";
      this.updateUI();
    } catch(e) {
      this.enabled = false;
    }
  },

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("curio_sfx", this.enabled);
    this.updateUI();
    if (this.enabled) this.playPop();
  },

  updateUI() {
    const sfxBtn = document.getElementById("sfx-toggle");
    if (sfxBtn) {
      sfxBtn.innerHTML = this.enabled ? "🔊" : "🔇";
      sfxBtn.title = this.enabled ? "Sound Effects: ON (Click to Mute)" : "Sound Effects: OFF (Click to Enable)";
    }
  },

  playPop() {
    if (!this.enabled || !this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch(e) {}
  },

  playFlip() {
    if (!this.enabled || !this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(280, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  },

  playChime() {
    if (!this.enabled || !this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.18, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    } catch(e) {}
  },

  playBuzzer() {
    if (!this.enabled || !this.ctx) return;
    try {
      if (this.ctx.state === "suspended") this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.setValueAtTime(120, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch(e) {}
  }
};

// Theme Controller
const ThemeManager = {
  currentTheme: "dark",

  init() {
    const saved = localStorage.getItem("curio_theme") || "dark";
    this.setTheme(saved);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        ComicSFX.playPop();
        this.toggle();
      });
    }
  },

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("curio_theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
      btn.title = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }
  },

  toggle() {
    this.setTheme(this.currentTheme === "dark" ? "light" : "dark");
  }
};

// Catalog Page Controller
const CatalogApp = {
  currentFilter: "all",
  searchQuery: "",

  init() {
    this.renderHeroSpotlight();
    this.renderCatalog();
    this.bindEvents();
  },

  renderHeroSpotlight() {
    const spotlightWrap = document.getElementById("featured-spotlight-container");
    if (!spotlightWrap) return;

    const featured = COMIC_DATABASE.find(c => c.featured) || COMIC_DATABASE[0];
    const progress = StorageManager.getReadProgress(featured.id);

    spotlightWrap.innerHTML = `
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-tag-bar">
            <span class="badge-featured">⭐ Editor's Choice</span>
            <span class="badge-sdg">SDG 4: Quality Education</span>
            <span class="category-pill" style="background:${featured.categoryBadgeColor}">${featured.category}</span>
          </div>
          <h1 class="hero-title">${featured.title}</h1>
          <p class="hero-tagline">“${featured.tagline}”</p>
          <p class="hero-summary">${featured.summary}</p>
          
          <div class="hero-meta-grid">
            <div class="meta-item">
              <div class="meta-item-label">Target Audience</div>
              <div class="meta-item-value">${featured.level}</div>
            </div>
            <div class="meta-item">
              <div class="meta-item-label">Reading Time</div>
              <div class="meta-item-value">⏱️ ${featured.readingTime}</div>
            </div>
            <div class="meta-item">
              <div class="meta-item-label">Your Progress</div>
              <div class="meta-item-value">${progress > 0 ? progress + '% Completed' : 'Not Started'}</div>
            </div>
          </div>

          <div class="hero-cta-group">
            <a href="reader.html?id=${featured.id}" class="btn-comic" onclick="ComicSFX.playFlip()">
              <span>🚀 Read Issue Now</span>
            </a>
            <a href="#catalog" class="btn-comic-secondary" onclick="ComicSFX.playPop()">
              <span>📚 Browse All Stories</span>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-cover-wrap">
            ${featured.coverSvg}
          </div>
        </div>
      </div>
    `;
  },

  renderCatalog() {
    const grid = document.getElementById("comic-catalog-grid");
    if (!grid) return;

    const filtered = COMIC_DATABASE.filter(item => {
      const matchesFilter = this.currentFilter === "all" || item.category.toLowerCase().includes(this.currentFilter.toLowerCase());
      const query = this.searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">No Comic Stories Found</h3>
          <p style="color: var(--text-muted);">Try adjusting your search keywords or switching category filters.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(comic => {
      const progress = StorageManager.getReadProgress(comic.id);
      const isFav = StorageManager.isFavorite(comic.id);

      return `
        <article class="comic-card" data-id="${comic.id}">
          <div class="card-media-wrap">
            ${comic.coverSvg}
            <div class="card-badges-overlay">
              <span class="category-pill" style="background:${comic.categoryBadgeColor}">${comic.category}</span>
              <button class="fav-btn-bubble ${isFav ? 'active' : ''}" data-comic="${comic.id}" title="${isFav ? 'Remove Favorite' : 'Save as Favorite'}">
                ${isFav ? '❤️' : '🤍'}
              </button>
            </div>
          </div>

          <div class="card-body">
            <div class="card-series-num">${comic.issue} • ${comic.level}</div>
            <h3 class="card-title">${comic.title}</h3>
            <p class="card-summary">${comic.summary}</p>
            
            <div class="card-progress-wrap">
              <div class="progress-info">
                <span>Reading Progress</span>
                <span>${progress}%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: ${progress}%"></div>
              </div>
            </div>

            <div class="card-action-bar">
              <a href="reader.html?id=${comic.id}" class="btn-read-sm" onclick="ComicSFX.playFlip()">
                ${progress > 0 ? '📖 Continue Reading' : '🚀 Start Reading'}
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Bind favorite buttons
    grid.querySelectorAll(".fav-btn-bubble").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        ComicSFX.playPop();
        const cid = btn.getAttribute("data-comic");
        const state = StorageManager.toggleFavorite(cid);
        btn.classList.toggle("active", state);
        btn.innerHTML = state ? "❤️" : "🤍";
      });
    });
  },

  bindEvents() {
    // Filter chips
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        ComicSFX.playPop();
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.currentFilter = chip.getAttribute("data-filter");
        this.renderCatalog();
      });
    });

    // Search input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.renderCatalog();
      });
    }

    // SFX toggle
    const sfxBtn = document.getElementById("sfx-toggle");
    if (sfxBtn) {
      sfxBtn.addEventListener("click", () => ComicSFX.toggle());
    }
  }
};

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  ComicSFX.init();
  ThemeManager.init();
  if (document.getElementById("comic-catalog-grid")) {
    CatalogApp.init();
  }
});
