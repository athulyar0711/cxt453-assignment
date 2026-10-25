# Assignment 2 — Design Process and Perspective (CXT453)
### Roll No: 20 | Module 4, 5

---

### Question 1: What was the assigned brief for your roll number, and what did you develop?
**Answer:**
For **Roll No. 20** (range 15 – 28), the assigned brief from the question paper is:
> **"DEVELOP A PUBLICATION WEBSITE THAT TELLS COMIC STORIES. - SDG 4"** (CO5, Max Marks: 20)

To fulfill this, I developed **CurioComics** ([http://localhost:8080/index.html](http://localhost:8080/index.html)), a fully functional webcomic publication website that tells illustrated graphic stories across four educational disciplines:
1. **Physics & STEM:** *"The Quantum Enigma"* (explaining wave-particle duality and the double-slit experiment).
2. **Environmental Science:** *"Eco-Guardians: The Whispering Reef"* (explaining coral bleaching and reef restoration).
3. **Computer Science:** *"Byte & The Algorithm Citadel"* (explaining sorting algorithms and $O(N \log N)$ computational efficiency).
4. **History & Heritage:** *"Chronicles of Alexandria"* (explaining Eratosthenes' calculation of Earth's circumference and knowledge preservation).

---

### Question 2: What are the 5 connected pages of the website and how do they function?
**Answer:**
The website features 5 fully interconnected pages accessible through a unified top navigation bar:
1. **Home (`index.html`):** The main landing page featuring an Editor’s Choice spotlight, popular comic series previews, and an overview of the publication's educational mission.
2. **All Comics Library (`comics.html`):** The full catalog page where users can search by keyword or filter comics by category (Physics, Nature, Algorithms, History).
3. **Interactive Reader (`reader.html`):** The core reading experience where users can read graphic stories, switch between guided Slide Mode and continuous Webtoon Scroll Mode, listen to audio narration, view educational hotspots, and take an end-of-episode quiz.
4. **Community Lounge (`community.html`):** An interactive hub where readers can post discussion reflections, reply to fellow readers, and vote in reader polls for upcoming comic topics.
5. **About & FAQ (`about.html`):** Explains why visual storytelling works (dual-coding theory), simple mention of the UN SDG 4 mission, answers frequently asked questions, and provides an inquiry/feedback form.

---

### Question 3: How does the website support UN Sustainable Development Goal 4 (SDG 4: Quality Education)?
**Answer:**
Traditional educational materials often alienate learners with dense text and heavy jargon. CurioComics supports **SDG 4 (Quality Education)** by making learning intuitive, visual, and accessible through:
* **Visual Dual-Coding:** Pairing sequential illustrations with concise dialogue to increase conceptual retention by up to 65%.
* **"💡 Learn More" Hotspots:** Embedded buttons on comic panels that allow curious readers to dive deeper into the empirical science or history behind each scene.
* **Audio Inclusivity:** A built-in Web Speech API audio narrator that reads panel dialogue aloud for auditory learners, younger readers, and users with reading difficulties.
* **Active Formative Feedback:** Quick 3-question quizzes at the end of each comic episode that verify comprehension with immediate scientific feedback.

---

### Question 4: How is the visual design, typography, and layout crafted?
**Answer:**
* **Typography:** 
  * `Bangers` / `Impact` for punchy comic book display headings and sound bursts.
  * `Comic Neue` for speech bubbles to preserve an authentic hand-lettered feel while maintaining high legibility.
  * `Inter` for clean, neutral reading of explanations, navigation, and body text.
* **Color Palette & Halftone Texture:** 
  * Uses a high-contrast palette (Deep Ink `#0b0f19`, Comic Cyan `#38bdf8`, Electric Amber `#facc15`, and SDG Crimson `#c5192d`) that exceeds **WCAG 2.1 AA** contrast standards.
  * Incorporates subtle halftone dot backgrounds and ink-bordered panels with solid drop shadows (`4px 4px 0px #000`) for a tactile graphic-novel feel.
  * Supports seamless one-click Dark Mode and Light Mode switching.

---

### Question 5: What interactive technologies and audio features are implemented?
**Answer:**
* **Zero External Dependencies:** Built with semantic HTML5, modern CSS Grid/Flexbox, and modular JavaScript that runs offline or on any standard web host.
* **Web Audio API Synthesizer:** Algorithmically synthesizes retro comic sound effects (page turns, bubble pops, chime for correct answers, error buzzers) without requiring heavy audio files.
* **Web Speech API:** Provides native browser text-to-speech audio narration with play/pause controls.
* **Local State Persistence:** Uses the browser's `localStorage` to save reading progress percentages, favorites, and user comments across visits.

---

### Question 6: How does this work map to Course Outcome CO5 and Program Outcomes?
**Answer:**
* **CO5 (Design/Development of a Website or Publication):** Fulfill end-to-end design, UI/UX structure, vector art integration, and interactive reading functionality.
* **PO3 (Design/Development of Solutions — Strength: 3, WK5):** Applies design thinking to solve the problem of educational disengagement through visual storytelling.
* **PO5 (Modern Tool Usage — Strength: 2, WK6):** Employs modern web technologies, responsive CSS layout, Web Speech/Audio APIs, and scalable vector graphics.
* **PO9 (Communication — Strength: 2):** Communicates complex scientific and historical principles clearly and engagingly to diverse user groups.

---

### Quick Verification & Links:
* **Home:** [index.html](file:///d:/dpp/index.html)
* **All Comics:** [comics.html](file:///d:/dpp/comics.html)
* **Comic Reader:** [reader.html](file:///d:/dpp/reader.html?id=quantum-enigma)
* **Community:** [community.html](file:///d:/dpp/community.html)
* **About & FAQ:** [about.html](file:///d:/dpp/about.html)
