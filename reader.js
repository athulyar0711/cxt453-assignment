/**
 * CurioComics Interactive Reader Engine
 * Course: CXT453 - Design Process and Perspective
 * Roll No: 20
 */

const ComicReader = {
  comic: null,
  currentPanelIndex: 0,
  mode: "slide", // 'slide' or 'webtoon'
  isNarrating: false,

  init() {
    ComicSFX.init();
    ThemeManager.init();

    const params = new URLSearchParams(window.location.search);
    const comicId = params.get("id") || "quantum-enigma";
    this.comic = COMIC_DATABASE.find(c => c.id === comicId) || COMIC_DATABASE[0];

    this.renderHeader();
    this.renderSlideMode();
    this.renderWebtoonMode();
    this.renderQuiz();
    this.renderComments();
    this.bindEvents();
    this.updatePanelDisplay(0);
  },

  renderHeader() {
    const titleEl = document.getElementById("reader-title");
    const issueEl = document.getElementById("reader-issue");
    if (titleEl) titleEl.textContent = this.comic.title;
    if (issueEl) issueEl.textContent = `${this.comic.issue} • ${this.comic.category}`;

    document.title = `${this.comic.title} - CurioComics Reader`;
  },

  renderSlideMode() {
    const dotsContainer = document.getElementById("panel-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = this.comic.panels.map((p, idx) => `
        <button class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="Panel ${idx + 1}: ${p.title}"></button>
      `).join("");
    }
  },

  renderWebtoonMode() {
    const webtoonContainer = document.getElementById("webtoon-container");
    if (!webtoonContainer) return;

    webtoonContainer.innerHTML = this.comic.panels.map((panel, idx) => `
      <section class="webtoon-panel">
        <div class="panel-art-frame">
          ${panel.svgContent}
          ${panel.hotspot ? `
            <button class="hotspot-trigger-btn" onclick="ComicReader.openHotspot(${idx})" title="Click to view educational insight">
              💡 Learn More
            </button>
          ` : ''}
        </div>
        <div class="panel-dialogue-box">
          <div class="panel-header-row">
            <span class="panel-number-badge">Panel ${panel.panelNum} of ${this.comic.panels.length}</span>
            <span class="panel-sfx-text">${panel.sfx}</span>
          </div>
          <div class="panel-narrative">📜 ${panel.narrative}</div>
          <div class="speech-bubbles-grid">
            ${panel.speechBubbles.map((b, bIdx) => `
              <div class="comic-speech-bubble ${bIdx % 2 === 1 ? 'speaker-right' : ''}">
                <span class="bubble-speaker-tag">${b.speaker}:</span>
                “${b.text}”
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `).join("");
  },

  updatePanelDisplay(index) {
    if (index < 0 || index >= this.comic.panels.length) return;
    this.currentPanelIndex = index;
    const panel = this.comic.panels[index];

    // Update art
    const artFrame = document.getElementById("slide-art-frame");
    if (artFrame) {
      artFrame.innerHTML = `
        ${panel.svgContent}
        ${panel.hotspot ? `
          <button class="hotspot-trigger-btn" onclick="ComicReader.openHotspot(${index})" title="Click to view educational insight">
            💡 Learn More
          </button>
        ` : ''}
      `;
    }

    // Update Dialogue Box
    const numBadge = document.getElementById("slide-panel-num");
    const sfxEl = document.getElementById("slide-panel-sfx");
    const narrativeEl = document.getElementById("slide-narrative");
    const bubblesGrid = document.getElementById("slide-bubbles-grid");

    if (numBadge) numBadge.textContent = `Panel ${panel.panelNum} of ${this.comic.panels.length}`;
    if (sfxEl) sfxEl.textContent = panel.sfx;
    if (narrativeEl) narrativeEl.textContent = `📜 ${panel.narrative}`;

    if (bubblesGrid) {
      bubblesGrid.innerHTML = panel.speechBubbles.map((b, bIdx) => `
        <div class="comic-speech-bubble ${bIdx % 2 === 1 ? 'speaker-right' : ''}">
          <span class="bubble-speaker-tag">${b.speaker}:</span>
          “${b.text}”
        </div>
      `).join("");
    }

    // Update dots
    document.querySelectorAll(".reader-progress-dots .dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
      dot.classList.toggle("completed", idx < index);
    });

    // Update button states
    const prevBtn = document.getElementById("prev-panel-btn");
    const nextBtn = document.getElementById("next-panel-btn");
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) {
      if (index === this.comic.panels.length - 1) {
        nextBtn.innerHTML = `<span>🎯 Take Quiz</span>`;
      } else {
        nextBtn.innerHTML = `<span>Next Panel ⏩</span>`;
      }
    }

    // Save reading progress
    StorageManager.saveReadProgress(this.comic.id, index, this.comic.panels.length);

    // Stop speech if switching panels
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      this.isNarrating = false;
      const ttsBtn = document.getElementById("tts-toggle-btn");
      if (ttsBtn) ttsBtn.innerHTML = `🎙️ Listen`;
    }
  },

  nextPanel() {
    if (this.currentPanelIndex < this.comic.panels.length - 1) {
      ComicSFX.playFlip();
      this.updatePanelDisplay(this.currentPanelIndex + 1);
    } else {
      // Scroll to quiz
      const quizSection = document.getElementById("quiz-section");
      if (quizSection) {
        ComicSFX.playChime();
        quizSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  },

  prevPanel() {
    if (this.currentPanelIndex > 0) {
      ComicSFX.playFlip();
      this.updatePanelDisplay(this.currentPanelIndex - 1);
    }
  },

  setMode(mode) {
    this.mode = mode;
    ComicSFX.playPop();

    const slideView = document.getElementById("slide-view-container");
    const webtoonView = document.getElementById("webtoon-container");
    const btnSlide = document.getElementById("mode-slide-btn");
    const btnWebtoon = document.getElementById("mode-webtoon-btn");

    if (mode === "slide") {
      slideView.style.display = "block";
      webtoonView.style.display = "none";
      btnSlide.classList.add("active");
      btnWebtoon.classList.remove("active");
      this.updatePanelDisplay(this.currentPanelIndex);
    } else {
      slideView.style.display = "none";
      webtoonView.style.display = "flex";
      btnSlide.classList.remove("active");
      btnWebtoon.classList.add("active");
    }
  },

  openHotspot(panelIndex) {
    ComicSFX.playPop();
    const panel = this.comic.panels[panelIndex];
    if (!panel || !panel.hotspot) return;

    const modal = document.getElementById("hotspot-modal");
    const titleEl = document.getElementById("hotspot-title");
    const bodyEl = document.getElementById("hotspot-body");

    if (titleEl) titleEl.textContent = panel.hotspot.title;
    if (bodyEl) bodyEl.textContent = panel.hotspot.text;
    if (modal) modal.classList.add("active");
  },

  closeHotspot() {
    ComicSFX.playPop();
    const modal = document.getElementById("hotspot-modal");
    if (modal) modal.classList.remove("active");
  },

  toggleNarration() {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech audio narration is not supported on this browser.");
      return;
    }

    const ttsBtn = document.getElementById("tts-toggle-btn");

    if (this.isNarrating) {
      window.speechSynthesis.cancel();
      this.isNarrating = false;
      if (ttsBtn) ttsBtn.innerHTML = `🎙️ Listen`;
    } else {
      const panel = this.comic.panels[this.currentPanelIndex];
      let fullText = `${panel.title}. ${panel.narrative}. `;
      panel.speechBubbles.forEach(b => {
        fullText += `${b.speaker} says: ${b.text}. `;
      });

      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;

      utterance.onend = () => {
        this.isNarrating = false;
        if (ttsBtn) ttsBtn.innerHTML = `🎙️ Listen`;
      };

      utterance.onerror = () => {
        this.isNarrating = false;
        if (ttsBtn) ttsBtn.innerHTML = `🎙️ Listen`;
      };

      window.speechSynthesis.speak(utterance);
      this.isNarrating = true;
      if (ttsBtn) ttsBtn.innerHTML = `⏹️ Pause Audio`;
    }
  },

  renderQuiz() {
    const quizWrap = document.getElementById("quiz-questions-wrap");
    if (!quizWrap || !this.comic.quiz) return;

    quizWrap.innerHTML = this.comic.quiz.map((q, qIdx) => `
      <div class="quiz-question-card" id="quiz-card-${qIdx}">
        <div class="quiz-q-num">Question ${qIdx + 1} of ${this.comic.quiz.length}</div>
        <div class="quiz-q-text">${q.question}</div>
        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => `
            <button class="quiz-opt-btn" onclick="ComicReader.handleQuizAnswer(${qIdx}, ${optIdx}, this)">
              ${String.fromCharCode(65 + optIdx)}. ${opt}
            </button>
          `).join("")}
        </div>
        <div class="quiz-explanation-box" id="quiz-exp-${qIdx}"></div>
      </div>
    `).join("");
  },

  handleQuizAnswer(qIdx, selectedIdx, btnElement) {
    const question = this.comic.quiz[qIdx];
    const card = document.getElementById(`quiz-card-${qIdx}`);
    const explanationEl = document.getElementById(`quiz-exp-${qIdx}`);

    // Disable all options in this question
    const buttons = card.querySelectorAll(".quiz-opt-btn");
    buttons.forEach(b => b.disabled = true);

    if (selectedIdx === question.correct) {
      ComicSFX.playChime();
      btnElement.classList.add("selected-correct");
      explanationEl.innerHTML = `<strong>✅ Correct!</strong> ${question.explanation}`;
      explanationEl.style.borderLeftColor = "#10b981";
    } else {
      ComicSFX.playBuzzer();
      btnElement.classList.add("selected-incorrect");
      buttons[question.correct].classList.add("selected-correct");
      explanationEl.innerHTML = `<strong>❌ Incorrect.</strong> ${question.explanation}`;
      explanationEl.style.borderLeftColor = "#ef4444";
    }
    explanationEl.style.display = "block";

    this.checkQuizCompletion();
  },

  checkQuizCompletion() {
    const total = this.comic.quiz.length;
    const answered = document.querySelectorAll(".quiz-opt-btn:disabled").length / 4;
    
    if (answered >= total) {
      const correctCount = document.querySelectorAll(".selected-correct.quiz-opt-btn:focus, .quiz-opt-btn.selected-correct").length;
      // Show score banner
      const summary = document.getElementById("quiz-summary-box");
      const scoreBadge = document.getElementById("quiz-score-badge");
      const scoreMsg = document.getElementById("quiz-score-msg");

      if (summary && scoreBadge && scoreMsg) {
        summary.style.display = "block";
        scoreBadge.textContent = `🎯 ${correctCount} / ${total} Correct`;
        scoreMsg.innerHTML = correctCount === total 
          ? `🌟 Outstanding! You've achieved mastery in <strong>${this.comic.title}</strong>! Badge Awarded: <em>SDG 4 Scholar</em>.`
          : `Great effort! Review the comic panels and annotations above to reinforce your understanding.`;
        summary.scrollIntoView({ behavior: "smooth" });
      }
    }
  },

  renderComments() {
    const commentsList = document.getElementById("comments-list");
    if (!commentsList) return;

    const savedComments = JSON.parse(localStorage.getItem(`curio_comments_${this.comic.id}`) || "[]");
    
    // Default sample comments if empty
    const initialComments = savedComments.length > 0 ? savedComments : [
      {
        author: "Priya M.",
        date: "2 hours ago",
        text: "The explanation of wave interference with the visual graphics made quantum superposition click for me in seconds! Brilliant educational comic."
      },
      {
        author: "Arjun K.",
        date: "Yesterday",
        text: "Loved the 'Click to Learn' hotspot feature on the Double-Slit experiment. Perfect balance between story narrative and scientific depth."
      }
    ];

    commentsList.innerHTML = initialComments.map(c => `
      <div class="comment-item">
        <div class="comment-author-row">
          <div class="comment-avatar">${c.author.charAt(0)}</div>
          <strong style="font-size:0.95rem;">${c.author}</strong>
          <span style="font-size:0.75rem; color:var(--text-muted); margin-left:auto;">${c.date}</span>
        </div>
        <p style="font-size:0.9rem; color:var(--text-muted);">${c.text}</p>
      </div>
    `).join("");
  },

  addComment() {
    const input = document.getElementById("new-comment-input");
    if (!input || !input.value.trim()) return;

    ComicSFX.playPop();
    const savedComments = JSON.parse(localStorage.getItem(`curio_comments_${this.comic.id}`) || "[]");
    const newEntry = {
      author: "Student Reader",
      date: "Just now",
      text: input.value.trim()
    };
    savedComments.unshift(newEntry);
    localStorage.setItem(`curio_comments_${this.comic.id}`, JSON.stringify(savedComments));

    input.value = "";
    this.renderComments();
  },

  bindEvents() {
    // Mode toggles
    const btnSlide = document.getElementById("mode-slide-btn");
    const btnWebtoon = document.getElementById("mode-webtoon-btn");
    if (btnSlide) btnSlide.addEventListener("click", () => this.setMode("slide"));
    if (btnWebtoon) btnWebtoon.addEventListener("click", () => this.setMode("webtoon"));

    // Nav buttons
    const prevBtn = document.getElementById("prev-panel-btn");
    const nextBtn = document.getElementById("next-panel-btn");
    if (prevBtn) prevBtn.addEventListener("click", () => this.prevPanel());
    if (nextBtn) nextBtn.addEventListener("click", () => this.nextPanel());

    // Dot indicators
    const dotsContainer = document.getElementById("panel-dots");
    if (dotsContainer) {
      dotsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("dot")) {
          const idx = parseInt(e.target.getAttribute("data-index"), 10);
          ComicSFX.playFlip();
          this.updatePanelDisplay(idx);
        }
      });
    }

    // Hotspot modal close
    const modalCloseBtn = document.getElementById("close-hotspot-btn");
    const modal = document.getElementById("hotspot-modal");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => this.closeHotspot());
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) this.closeHotspot();
      });
    }

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") this.nextPanel();
      if (e.key === "ArrowLeft") this.prevPanel();
      if (e.key === "Escape") this.closeHotspot();
    });

    // TTS Button
    const ttsBtn = document.getElementById("tts-toggle-btn");
    if (ttsBtn) ttsBtn.addEventListener("click", () => this.toggleNarration());

    // Comment submission
    const commentSubmitBtn = document.getElementById("submit-comment-btn");
    if (commentSubmitBtn) commentSubmitBtn.addEventListener("click", () => this.addComment());
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ComicReader.init();
});
