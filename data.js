/**
 * CurioComics Data Repository
 * Course: CXT453 - Design Process and Perspective
 * Assignment 2 - Roll No: 20
 * Problem Brief: Publication Website That Tells Comic Stories (SDG 4 - Quality Education)
 */

const COMIC_DATABASE = [
  {
    id: "quantum-enigma",
    title: "The Quantum Enigma: Voyage into the Subatomic",
    slug: "quantum-enigma",
    tagline: "Unraveling wave-particle duality through a microscopic journey!",
    sdg: "SDG 4: Quality Education (STEM Literacy)",
    category: "Physics & STEM",
    categoryBadgeColor: "#0284c7",
    author: "CurioComics STEM Lab",
    illustrator: "CurioComics Creative Studio",
    readingTime: "5 min read",
    level: "Middle / High School",
    issue: "Vol. 1 • Issue #01",
    featured: true,
    rating: 4.9,
    readsCount: "14.2k",
    heroGradient: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
    accentColor: "#38bdf8",
    summary: "When a crucial photon experiment behaves unpredictably in the lab, Dr. Maya and her micro-drone Planck shrink to nanoscale to witness wave-particle duality first-hand. An action-packed visual introduction to quantum mechanics!",
    learningObjectives: [
      "Understand the dual nature of light as both a wave and a stream of particles (photons).",
      "Discover the iconic Double-Slit Experiment and the wave interference pattern.",
      "Explore the Observer Effect and how measurement fundamentally alters quantum states."
    ],
    coverSvg: `<svg viewBox="0 0 400 500" class="comic-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="qbg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
          <stop offset="50%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </radialGradient>
        <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#ec4899"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#qbg)"/>
      <circle cx="200" cy="220" r="140" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,6" opacity="0.6"/>
      <circle cx="200" cy="220" r="95" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,8" opacity="0.5"/>
      <ellipse cx="200" cy="220" rx="160" ry="60" fill="none" stroke="#a855f7" stroke-width="2.5" transform="rotate(-30 200 220)"/>
      <ellipse cx="200" cy="220" rx="160" ry="60" fill="none" stroke="#38bdf8" stroke-width="2.5" transform="rotate(30 200 220)"/>
      <!-- Glowing quantum nucleus -->
      <circle cx="200" cy="220" r="28" fill="#facc15" filter="drop-shadow(0 0 16px #facc15)"/>
      <!-- Dr Maya silhouette -->
      <g transform="translate(140, 270)">
        <path d="M 60 70 L 45 160 L 75 160 Z" fill="#0284c7"/>
        <path d="M 50 80 L 10 130 L 25 135 L 55 95 Z" fill="#38bdf8"/>
        <circle cx="60" cy="50" r="22" fill="#fed7aa"/>
        <path d="M 45 45 Q 60 25 75 45 Q 80 70 75 80 L 45 80 Z" fill="#475569"/>
        <!-- Glasses / Goggles -->
        <rect x="50" y="44" width="22" height="9" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      </g>
      <!-- Drone Planck -->
      <g transform="translate(260, 110)">
        <circle cx="30" cy="30" r="24" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
        <circle cx="30" cy="30" r="12" fill="#38bdf8"/>
        <line x1="6" y1="30" x2="-8" y2="20" stroke="#38bdf8" stroke-width="3"/>
        <line x1="54" y1="30" x2="68" y2="20" stroke="#38bdf8" stroke-width="3"/>
        <circle cx="30" cy="30" r="5" fill="#ffffff"/>
      </g>
      <!-- Comic Title Banner -->
      <rect x="25" y="405" width="350" height="70" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
      <text x="200" y="435" text-anchor="middle" font-family="'Bangers', 'Impact', sans-serif" font-size="24" fill="#facc15" letter-spacing="1">THE QUANTUM ENIGMA</text>
      <text x="200" y="458" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="#94a3b8">EPISODE 01: WAVE OR PARTICLE?</text>
    </svg>`,
    panels: [
      {
        panelNum: 1,
        title: "The Laboratory Anomaly",
        sfx: "BZZT! CLICK!",
        narrative: "Late evening at the Advanced Optics Institute. Lead Physicist Dr. Maya gazes at the photodetector screen in utter bewilderment.",
        speechBubbles: [
          { speaker: "Dr. Maya", text: "Look at this detector, Planck! When we fire individual photons, they shouldn't form an interference pattern. Yet here it is!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Planck (AI Bot)", text: "Sensor anomaly detected! Are they acting like cannonballs or ocean waves? The math is having an existential crisis!", x: 70, y: 72, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#090d16"/>
          <!-- Lab Equipment & Background -->
          <rect x="40" y="60" width="220" height="260" rx="6" fill="#1e293b" stroke="#334155" stroke-width="3"/>
          <rect x="55" y="80" width="190" height="150" fill="#020617" stroke="#38bdf8" stroke-width="2"/>
          <!-- Wavy interference lines on screen -->
          <path d="M 65 155 Q 100 90 150 155 T 235 155" fill="none" stroke="#38bdf8" stroke-width="3"/>
          <path d="M 65 160 Q 100 110 150 160 T 235 160" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.7"/>
          <circle cx="150" cy="155" r="5" fill="#facc15"/>
          <text x="150" y="215" text-anchor="middle" fill="#38bdf8" font-size="12" font-family="monospace">INTERFERENCE DETECTED: 100%</text>
          <!-- Optical Bench -->
          <rect x="0" y="320" width="600" height="80" fill="#0f172a" stroke="#334155" stroke-width="2"/>
          <rect x="300" y="240" width="120" height="80" fill="#334155"/>
          <path d="M 420 280 L 600 280" stroke="#f43f5e" stroke-width="4" stroke-dasharray="10,5"/>
          <!-- Dr Maya character -->
          <g transform="translate(290, 110)">
            <ellipse cx="60" cy="50" rx="25" ry="28" fill="#fed7aa"/>
            <path d="M 40 45 Q 60 20 80 45 Q 85 80 80 90 L 40 90 Z" fill="#334155"/>
            <!-- Lab coat -->
            <path d="M 40 90 L 10 210 L 110 210 L 80 90 Z" fill="#f8fafc"/>
            <path d="M 40 90 L 60 140 L 80 90" fill="#e2e8f0"/>
            <!-- Goggles -->
            <rect x="48" y="44" width="26" height="12" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
          </g>
          <!-- Planck Bot -->
          <g transform="translate(470, 180)">
            <circle cx="30" cy="30" r="28" fill="#1e293b" stroke="#38bdf8" stroke-width="4"/>
            <circle cx="30" cy="30" r="14" fill="#38bdf8"/>
            <circle cx="30" cy="30" r="6" fill="#ffffff"/>
            <line x1="30" y1="2" x2="30" y2="-15" stroke="#38bdf8" stroke-width="3"/>
            <circle cx="30" cy="-18" r="4" fill="#facc15"/>
          </g>
          <!-- Comic sound effect burst -->
          <g transform="translate(80, 20)">
            <polygon points="20,0 35,15 55,5 45,25 65,35 45,45 50,65 30,50 15,65 18,42 0,35 15,22" fill="#facc15" stroke="#ef4444" stroke-width="2"/>
            <text x="32" y="38" font-family="'Bangers', sans-serif" font-size="14" fill="#b91c1c" font-weight="900">BZZT!</text>
          </g>
        </svg>`,
        hotspot: {
          x: 25,
          y: 40,
          title: "What is an Interference Pattern?",
          text: "When two waves overlap (like ripples in a pond), their peaks and troughs combine to create bright bands (constructive interference) and dark bands (destructive interference). Particles shouldn't do this!"
        }
      },
      {
        panelNum: 2,
        title: "The Subatomic Shrinkage",
        sfx: "QUANTUM COMPRESSION INITIATED!",
        narrative: "Dr. Maya activates the experimental Subatomic Translation Chamber. Reality warps as they dive beneath the nanoscale barrier.",
        speechBubbles: [
          { speaker: "Dr. Maya", text: "Hold onto your circuits, Planck! We're shrinking down past molecules, past atoms, right into the quantum fog!", x: 50, y: 22, tail: "bottom" },
          { speaker: "Planck", text: "Warning: Classical physics laws offline! Macro logic no longer applies here!", x: 65, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tunnel" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stop-color="#f43f5e"/>
              <stop offset="30%" stop-color="#8b5cf6"/>
              <stop offset="70%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#030712"/>
            </radialGradient>
          </defs>
          <rect width="600" height="400" fill="url(#tunnel)"/>
          <!-- Dimensional warp spirals -->
          <g stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6">
            <circle cx="300" cy="200" r="40"/>
            <circle cx="300" cy="200" r="90" stroke-dasharray="12,8"/>
            <circle cx="300" cy="200" r="150" stroke-dasharray="20,10"/>
            <circle cx="300" cy="200" r="220" stroke-dasharray="8,6"/>
          </g>
          <!-- Floating energy atoms -->
          <circle cx="120" cy="90" r="16" fill="#38bdf8" filter="drop-shadow(0 0 10px #38bdf8)"/>
          <circle cx="480" cy="310" r="20" fill="#facc15" filter="drop-shadow(0 0 10px #facc15)"/>
          <circle cx="490" cy="80" r="14" fill="#ec4899" filter="drop-shadow(0 0 10px #ec4899)"/>
          <!-- Maya & Planck in transit capsule -->
          <g transform="translate(240, 140)">
            <ellipse cx="60" cy="60" rx="70" ry="50" fill="#1e293b" stroke="#38bdf8" stroke-width="4" opacity="0.9"/>
            <ellipse cx="60" cy="55" rx="55" ry="32" fill="#0284c7" opacity="0.4"/>
            <!-- Tiny Maya & Planck inside -->
            <circle cx="45" cy="55" r="12" fill="#fed7aa"/>
            <circle cx="75" cy="55" r="10" fill="#38bdf8"/>
            <line x1="75" y1="45" x2="75" y2="38" stroke="#38bdf8" stroke-width="2"/>
          </g>
          <!-- Comic Action FX -->
          <g transform="translate(20, 20)">
            <text x="30" y="40" font-family="'Bangers', sans-serif" font-size="28" fill="#facc15" stroke="#b45309" stroke-width="1">WHOOSH!!</text>
          </g>
        </svg>`,
        hotspot: {
          x: 50,
          y: 40,
          title: "Scale of the Subatomic Realm",
          text: "An atom is roughly 0.1 nanometers (10^-10 meters) wide. A photon is an elementary quantum of electromagnetic radiation with zero rest mass!"
        }
      },
      {
        panelNum: 3,
        title: "The Double-Slit Barrier",
        sfx: "TWANG! VIBRATE!",
        narrative: "Arriving before the iconic twin slits. Maya and Planck witness single photons fired one by one from an electron-gun emitter.",
        speechBubbles: [
          { speaker: "Dr. Maya", text: "Look closely! There are two slits in the wall. A normal tennis ball must go through slit A OR slit B...", x: 45, y: 20, tail: "bottom" },
          { speaker: "Dr. Maya", text: "Yet, as each photon approaches, it behaves like ripples spreading out, passing through BOTH slits simultaneously!", x: 60, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#030712"/>
          <!-- The Barrier with 2 slits -->
          <rect x="260" y="0" width="30" height="130" fill="#334155" stroke="#475569" stroke-width="2"/>
          <rect x="260" y="170" width="30" height="60" fill="#334155" stroke="#475569" stroke-width="2"/>
          <rect x="260" y="270" width="30" height="130" fill="#334155" stroke="#475569" stroke-width="2"/>
          <!-- Wave fronts approaching slits -->
          <path d="M 60 200 A 150 150 0 0 1 200 80" stroke="#38bdf8" stroke-width="3" fill="none" opacity="0.8"/>
          <path d="M 100 200 A 110 110 0 0 1 220 110" stroke="#38bdf8" stroke-width="3" fill="none" opacity="0.6"/>
          <path d="M 140 200 A 70 70 0 0 1 240 140" stroke="#38bdf8" stroke-width="3" fill="none" opacity="0.4"/>
          <!-- Circular waves emerging from Slit 1 and Slit 2 -->
          <circle cx="275" cy="150" r="40" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.8"/>
          <circle cx="275" cy="150" r="80" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.6"/>
          <circle cx="275" cy="150" r="120" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.4"/>
          <circle cx="275" cy="250" r="40" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.8"/>
          <circle cx="275" cy="250" r="80" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.6"/>
          <circle cx="275" cy="250" r="120" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
          <!-- Slit labels -->
          <rect x="295" y="140" width="60" height="22" rx="4" fill="#0f172a"/>
          <text x="325" y="155" text-anchor="middle" fill="#facc15" font-size="11" font-weight="700">SLIT A</text>
          <rect x="295" y="240" width="60" height="22" rx="4" fill="#0f172a"/>
          <text x="325" y="255" text-anchor="middle" fill="#facc15" font-size="11" font-weight="700">SLIT B</text>
          <!-- Photon emitter -->
          <rect x="10" y="175" width="50" height="50" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="35" cy="200" r="12" fill="#facc15" filter="drop-shadow(0 0 10px #facc15)"/>
        </svg>`,
        hotspot: {
          x: 48,
          y: 40,
          title: "Wave Superposition",
          text: "Before observation, a quantum particle exists in a 'superposition of states'—a mathematical wave packet traversing all available paths at once!"
        }
      },
      {
        panelNum: 4,
        title: "The Interference Miracle",
        sfx: "PULSE! GLOW!",
        narrative: "On the distant detection screen, peaks amplify peaks and valleys cancel valleys, creating bright and dark stripes.",
        speechBubbles: [
          { speaker: "Planck", text: "Dr. Maya! The photon isn't colliding randomly! Even when fired ONE AT A TIME, each photon interferes with its own probability wave!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Dr. Maya", text: "Precisely! Light possesses duality: wave characteristics during journey, discrete particle energy at impact!", x: 65, y: 75, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#0f172a"/>
          <!-- Detection backplate -->
          <rect x="480" y="20" width="80" height="360" rx="4" fill="#020617" stroke="#38bdf8" stroke-width="2"/>
          <!-- Bright & dark interference bands -->
          <rect x="495" y="40" width="50" height="16" fill="#38bdf8" opacity="0.3"/>
          <rect x="495" y="80" width="50" height="26" fill="#38bdf8" opacity="0.7"/>
          <rect x="495" y="130" width="50" height="40" fill="#38bdf8" opacity="0.95" filter="drop-shadow(0 0 8px #38bdf8)"/>
          <rect x="495" y="190" width="50" height="40" fill="#38bdf8" opacity="0.95" filter="drop-shadow(0 0 8px #38bdf8)"/>
          <rect x="495" y="250" width="50" height="26" fill="#38bdf8" opacity="0.7"/>
          <rect x="495" y="300" width="50" height="16" fill="#38bdf8" opacity="0.3"/>
          <!-- Wave graphic in center -->
          <path d="M 60 200 C 140 100, 220 300, 300 200 S 380 100, 480 200" fill="none" stroke="#a855f7" stroke-width="4"/>
          <path d="M 60 200 C 140 300, 220 100, 300 200 S 380 300, 480 200" fill="none" stroke="#f43f5e" stroke-width="3" opacity="0.7"/>
          <!-- Floating characters -->
          <g transform="translate(140, 260)">
            <circle cx="30" cy="30" r="22" fill="#fed7aa"/>
            <rect x="18" y="24" width="24" height="10" rx="3" fill="#0284c7"/>
            <path d="M 15 52 L 45 52 L 40 100 L 20 100 Z" fill="#f8fafc"/>
          </g>
          <g transform="translate(230, 240)">
            <circle cx="20" cy="20" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <circle cx="20" cy="20" r="8" fill="#facc15"/>
          </g>
          <text x="300" y="50" text-anchor="middle" fill="#facc15" font-family="'Bangers', sans-serif" font-size="24">DESTRUCTIVE & CONSTRUCTIVE INTERFERENCE</text>
        </svg>`,
        hotspot: {
          x: 82,
          y: 45,
          title: "Constructive vs Destructive Interference",
          text: "Bright bands occur where wave peaks line up (in-phase). Dark bands occur where a peak meets a trough, cancelling out the probability of a photon arriving there!"
        }
      },
      {
        panelNum: 5,
        title: "The Observer Shock",
        sfx: "SNAP! COLLAPSE!",
        narrative: "Curious, Planck turns on a detector right next to Slit A to see which slit the photon 'actually' goes through.",
        speechBubbles: [
          { speaker: "Planck", text: "Detector engaged! Slit sensor is online! We caught it—it went through Slit A!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Dr. Maya", text: "Wait! Look at the screen! The interference pattern vanished! It collapsed into two plain particle bands!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#0b0f19"/>
          <!-- Detector Camera with spotlight beam -->
          <g transform="translate(200, 70)">
            <rect x="0" y="0" width="55" height="40" rx="6" fill="#ef4444" stroke="#fca5a5" stroke-width="2"/>
            <circle cx="28" cy="20" r="12" fill="#ffffff"/>
            <circle cx="28" cy="20" r="6" fill="#0284c7"/>
            <!-- Sensor ray beam -->
            <polygon points="28,40 0,160 80,160" fill="#ef4444" opacity="0.3"/>
            <text x="28" y="-8" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">OBSERVER ON</text>
          </g>
          <!-- Barrier with slits -->
          <rect x="230" y="160" width="20" height="30" fill="#334155"/>
          <rect x="230" y="210" width="20" height="30" fill="#334155"/>
          <!-- Only 2 simple bands on screen now -->
          <rect x="480" y="30" width="70" height="340" rx="4" fill="#020617" stroke="#ef4444" stroke-width="2"/>
          <rect x="495" y="140" width="40" height="30" fill="#facc15" filter="drop-shadow(0 0 10px #facc15)"/>
          <rect x="495" y="230" width="40" height="30" fill="#facc15" filter="drop-shadow(0 0 10px #facc15)"/>
          <text x="495" y="195" fill="#94a3b8" font-size="11" font-family="monospace">NO INTERFERENCE</text>
          <!-- Dramatic shock face Dr Maya -->
          <g transform="translate(70, 200)">
            <circle cx="40" cy="40" r="32" fill="#fed7aa"/>
            <!-- Wide open eyes in shock -->
            <circle cx="30" cy="35" r="7" fill="#ffffff" stroke="#000" stroke-width="2"/>
            <circle cx="50" cy="35" r="7" fill="#ffffff" stroke="#000" stroke-width="2"/>
            <circle cx="30" cy="35" r="3" fill="#000"/>
            <circle cx="50" cy="35" r="3" fill="#000"/>
            <!-- Open mouth 'O' -->
            <ellipse cx="40" cy="55" rx="8" ry="12" fill="#b91c1c"/>
          </g>
          <g transform="translate(340, 30)">
            <polygon points="10,0 25,12 45,2 35,22 55,30 35,38 40,58 22,44 10,58 12,38 0,30 12,18" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
            <text x="26" y="34" font-family="'Bangers', sans-serif" font-size="14" fill="#ffffff">GASP!</text>
          </g>
        </svg>`,
        hotspot: {
          x: 35,
          y: 22,
          title: "The Quantum Measurement Problem",
          text: "In quantum mechanics, measuring or detecting which path a particle took destroys the wave interference. This is called the 'collapse of the wave function'!"
        }
      },
      {
        panelNum: 6,
        title: "The Future of Quantum Power",
        sfx: "EUREKA! KNOWLEDGE UNLOCKED!",
        narrative: "Returning to full macro size. Maya and Planck reflect on how this strange mystery forms the backbone of tomorrow's technology.",
        speechBubbles: [
          { speaker: "Dr. Maya", text: "Because quantum objects exist in superposition, quantum computers can process millions of possibilities at the same time!", x: 45, y: 22, tail: "bottom" },
          { speaker: "Planck", text: "From ultra-secure quantum cryptography to room-temperature superconductors—the subatomic world holds the future of human engineering!", x: 65, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="qfuture" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#042f2e"/>
              <stop offset="50%" stop-color="#0f172a"/>
              <stop offset="100%" stop-color="#134e4a"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#qfuture)"/>
          <!-- Quantum chandelier chandelier / quantum computer core -->
          <g transform="translate(300, 20)">
            <rect x="-70" y="0" width="140" height="20" fill="#facc15"/>
            <rect x="-50" y="20" width="100" height="15" fill="#cbd5e1"/>
            <rect x="-35" y="35" width="70" height="30" fill="#e2e8f0"/>
            <!-- Golden cooling tubes -->
            <path d="M -40 65 C -60 120, -50 160, -20 200" stroke="#facc15" stroke-width="4" fill="none"/>
            <path d="M -20 65 C -30 130, -10 170, 0 200" stroke="#facc15" stroke-width="4" fill="none"/>
            <path d="M 20 65 C 30 130, 10 170, 0 200" stroke="#facc15" stroke-width="4" fill="none"/>
            <path d="M 40 65 C 60 120, 50 160, 20 200" stroke="#facc15" stroke-width="4" fill="none"/>
            <!-- Qubit chip at bottom -->
            <rect x="-30" y="200" width="60" height="35" rx="6" fill="#0f766e" stroke="#2dd4bf" stroke-width="3"/>
            <circle cx="0" cy="217" r="10" fill="#2dd4bf" filter="drop-shadow(0 0 10px #2dd4bf)"/>
          </g>
          <!-- Proud Dr Maya & Planck -->
          <g transform="translate(80, 180)">
            <circle cx="40" cy="30" r="24" fill="#fed7aa"/>
            <path d="M 20 22 Q 40 10 60 22 Q 65 50 60 60 L 20 60 Z" fill="#334155"/>
            <path d="M 20 60 L 0 170 L 80 170 L 60 60 Z" fill="#f8fafc"/>
            <!-- Thumbs up -->
            <circle cx="85" cy="110" r="10" fill="#fed7aa"/>
            <rect x="80" y="98" width="6" height="15" rx="3" fill="#fed7aa"/>
          </g>
          <g transform="translate(460, 200)">
            <circle cx="30" cy="30" r="26" fill="#1e293b" stroke="#2dd4bf" stroke-width="4"/>
            <path d="M 22 28 Q 30 38 38 28" stroke="#2dd4bf" stroke-width="3" fill="none"/>
            <circle cx="24" cy="22" r="3" fill="#2dd4bf"/>
            <circle cx="36" cy="22" r="3" fill="#2dd4bf"/>
          </g>
          <!-- Badge overlay -->
          <rect x="180" y="320" width="240" height="45" rx="22" fill="#0f172a" stroke="#2dd4bf" stroke-width="2"/>
          <text x="300" y="348" text-anchor="middle" fill="#2dd4bf" font-family="'Bangers', sans-serif" font-size="18" letter-spacing="1">SDG 4: STEM LITERACY MASTERED!</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 82,
          title: "Real-World Applications",
          text: "Quantum computing, quantum cryptography (unhackable quantum key distribution), MRI medical scanners, and atomic clocks all operate based on quantum principles!"
        }
      }
    ],
    quiz: [
      {
        question: "In the Double-Slit experiment with light, what do the multiple light and dark bands on the screen represent?",
        options: [
          "Light particles bouncing randomly off the edges of the slits",
          "An interference pattern produced by overlapping wave fronts",
          "Defects in the glass material of the detector",
          "Heat radiation from the laser battery"
        ],
        correct: 1,
        explanation: "The alternating bright and dark bands are a classic interference pattern, proving light behaves like a wave with peaks that constructively amplify and troughs that destructively cancel."
      },
      {
        question: "What dramatic phenomenon happens when scientists place an active detector directly at one of the slits?",
        options: [
          "The laser doubles in brightness",
          "The interference pattern disappears and turns into two simple particle bands",
          "The photons reverse direction and return to the emitter",
          "The slits fuse together"
        ],
        correct: 1,
        explanation: "This is the famous Quantum Observer Effect. Measuring which slit the particle went through collapses the wave function, destroying the wave interference pattern."
      },
      {
        question: "How does quantum superposition power next-generation quantum computers?",
        options: [
          "By using heavier copper wires to transmit heat",
          "By allowing quantum bits (qubits) to exist as both 0 and 1 simultaneously, exploring multiple solutions at once",
          "By eliminating the need for electric power completely",
          "By replacing silicon with wood fibers"
        ],
        correct: 1,
        explanation: "Unlike classical bits (strictly 0 or 1), quantum qubits can exist in a superposition of both states, allowing quantum computers to evaluate vast combinatorial problems simultaneously."
      }
    ]
  },
  {
    id: "eco-guardians",
    title: "Eco-Guardians: The Whispering Reef",
    slug: "eco-guardians",
    tagline: "Dive beneath the waves to save our coral ecosystems through marine science!",
    sdg: "SDG 4: Quality Education & SDG 14: Life Below Water",
    category: "Environmental Science",
    categoryBadgeColor: "#059669",
    author: "Oceanic Literacy Guild",
    illustrator: "CurioComics Creative Studio",
    readingTime: "4 min read",
    level: "Middle School / All Ages",
    issue: "Vol. 1 • Issue #02",
    featured: true,
    rating: 4.8,
    readsCount: "11.7k",
    heroGradient: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)",
    accentColor: "#10b981",
    summary: "Young marine apprentice Kai and hydro-drone Nami explore Coral Haven, only to find the reef turning ghostly white. Discover the delicate symbiotic balance that keeps our oceans alive and how scientific restoration can reverse the tide.",
    learningObjectives: [
      "Understand the mutualistic symbiosis between coral polyps and zooxanthellae microalgae.",
      "Identify the triggers of coral bleaching: elevated sea temperatures and ocean acidification.",
      "Explore community-led reef restoration techniques such as coral gardening and marine protected zones."
    ],
    coverSvg: `<svg viewBox="0 0 400 500" class="comic-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="reefbg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#14b8a6"/>
          <stop offset="60%" stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#042f2e"/>
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#reefbg)"/>
      <!-- Sun rays filtering down -->
      <polygon points="120,0 180,0 240,400 80,400" fill="#ffffff" opacity="0.08"/>
      <polygon points="260,0 320,0 380,400 240,400" fill="#ffffff" opacity="0.06"/>
      <!-- Coral formations -->
      <path d="M 0 500 Q 60 380 120 500 Q 180 340 240 500 Q 320 370 400 500 Z" fill="#042f2e"/>
      <path d="M 20 500 Q 50 410 90 500 Q 140 430 180 500" fill="#f43f5e" opacity="0.8"/>
      <path d="M 280 500 Q 320 390 360 500" fill="#facc15" opacity="0.8"/>
      <path d="M 200 500 Q 240 410 270 500" fill="#ec4899" opacity="0.7"/>
      <!-- Kai the diver -->
      <g transform="translate(140, 160)">
        <ellipse cx="60" cy="50" rx="45" ry="25" fill="#f59e0b" transform="rotate(-15 60 50)"/>
        <circle cx="110" cy="40" r="18" fill="#38bdf8"/>
        <!-- Flippers -->
        <polygon points="10,65 0,85 20,80" fill="#1e293b"/>
      </g>
      <!-- Sea turtle swimming -->
      <g transform="translate(240, 80)">
        <ellipse cx="40" cy="30" rx="30" ry="20" fill="#059669"/>
        <circle cx="75" cy="30" r="10" fill="#10b981"/>
        <ellipse cx="45" cy="15" rx="18" ry="8" fill="#34d399" transform="rotate(-30 45 15)"/>
        <ellipse cx="45" cy="45" rx="18" ry="8" fill="#34d399" transform="rotate(30 45 45)"/>
      </g>
      <!-- Title banner -->
      <rect x="25" y="410" width="350" height="65" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
      <text x="200" y="438" text-anchor="middle" font-family="'Bangers', 'Impact', sans-serif" font-size="24" fill="#facc15" letter-spacing="1">ECO-GUARDIANS</text>
      <text x="200" y="460" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="#a7f3d0">THE WHISPERING REEF</text>
    </svg>`,
    panels: [
      {
        panelNum: 1,
        title: "Descent into the Turquoise Deep",
        sfx: "SPLASH! GLUG!",
        narrative: "Off the coast of the Great Barrier Reef. Kai and autonomous eco-drone Nami descend beneath the sunlit surface waves.",
        speechBubbles: [
          { speaker: "Kai", text: "Look at this wonderland, Nami! Over 25% of all marine life depends on coral reefs, even though they cover less than 1% of the ocean floor!", x: 40, y: 22, tail: "bottom" },
          { speaker: "Nami", text: "Water salinity normal. Depth: 12 meters. But wait... thermal sensors are showing abnormal temperature spikes ahead!", x: 70, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ocean1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="40%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#ocean1)"/>
          <!-- Swimming Kai -->
          <g transform="translate(120, 140)">
            <!-- Scuba tank & body -->
            <rect x="30" y="40" width="60" height="22" rx="10" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
            <ellipse cx="60" cy="70" rx="60" ry="24" fill="#1e293b"/>
            <!-- Diving helmet/mask -->
            <circle cx="120" cy="65" r="20" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
            <!-- Air bubbles -->
            <circle cx="145" cy="50" r="6" fill="#ffffff" opacity="0.6"/>
            <circle cx="155" cy="35" r="8" fill="#ffffff" opacity="0.5"/>
            <circle cx="170" cy="18" r="10" fill="#ffffff" opacity="0.4"/>
          </g>
          <!-- Nami Drone -->
          <g transform="translate(360, 180)">
            <ellipse cx="40" cy="30" rx="35" ry="22" fill="#047857" stroke="#10b981" stroke-width="3"/>
            <circle cx="65" cy="30" r="12" fill="#34d399"/>
            <circle cx="65" cy="30" r="5" fill="#ffffff"/>
            <line x1="10" y1="30" x2="-10" y2="30" stroke="#10b981" stroke-width="3"/>
            <text x="40" y="-10" text-anchor="middle" fill="#facc15" font-family="monospace" font-size="11">NAMI HYDRO-SCAN</text>
          </g>
          <!-- Tropical fish schools -->
          <g fill="#f43f5e">
            <polygon points="460,80 490,70 490,90"/>
            <circle cx="455" cy="80" r="10"/>
            <polygon points="500,110 525,100 525,120"/>
            <circle cx="495" cy="110" r="8"/>
          </g>
        </svg>`,
        hotspot: {
          x: 20,
          y: 35,
          title: "Biodiversity Hotspots",
          text: "Coral reefs provide habitat, food, and shelter for more than 4,000 species of fish, 700 species of coral, and thousands of other marine plants and animals!"
        }
      },
      {
        panelNum: 2,
        title: "The Ghostly Transformation",
        sfx: "SILENCE... EERIE CHILL...",
        narrative: "Swimming past the outer ridge, the kaleidoscope of colors abruptly vanishes. In its place stands an eerie expanse of pale, chalk-white skeletons.",
        speechBubbles: [
          { speaker: "Kai", text: "Oh no... look at the staghorn and brain corals! They're completely bleached! What happened to their vibrant microalgae?", x: 42, y: 22, tail: "bottom" },
          { speaker: "Nami", text: "Water temperature is +1.8°C above seasonal average! Corals have expelled their symbiotic partners in distress!", x: 68, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#0f172a"/>
          <!-- Murky warm water gradient -->
          <rect width="600" height="400" fill="#0284c7" opacity="0.3"/>
          <!-- Bleached white corals -->
          <g fill="#f8fafc" stroke="#cbd5e1" stroke-width="2">
            <!-- Staghorn bleached coral branches -->
            <path d="M 100 400 L 110 300 L 90 240 L 95 210 L 115 240 L 130 200 L 140 240 L 160 190 L 170 230 L 180 320 L 210 400 Z"/>
            <path d="M 280 400 L 290 280 L 270 220 L 295 230 L 320 180 L 335 240 L 360 210 L 370 290 L 400 400 Z"/>
            <!-- Bleached brain coral hemisphere -->
            <ellipse cx="480" cy="350" rx="80" ry="60"/>
            <path d="M 430 350 Q 480 310 530 350 Q 480 380 430 350" fill="none" stroke="#94a3b8" stroke-width="3"/>
          </g>
          <!-- Kai shocked looking down -->
          <g transform="translate(60, 60)">
            <ellipse cx="60" cy="60" rx="40" ry="20" fill="#f59e0b"/>
            <circle cx="100" cy="55" r="16" fill="#38bdf8"/>
            <circle cx="95" cy="52" r="4" fill="#000"/>
          </g>
          <!-- Thermal warning box -->
          <rect x="360" y="30" width="200" height="60" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
          <text x="460" y="55" text-anchor="middle" fill="#fef2f2" font-size="12" font-weight="bold">TEMP ELEVATED: 31.4°C</text>
          <text x="460" y="75" text-anchor="middle" fill="#fca5a5" font-size="11">BLEACHING THRESHOLD EXCEEDED</text>
        </svg>`,
        hotspot: {
          x: 65,
          y: 20,
          title: "The Bleaching Mechanism",
          text: "Corals don't die instantly when bleached. When stressed by heat or pollution, they expel the colorful zooxanthellae living in their tissues. If temperatures cool quickly, they can recover!"
        }
      },
      {
        panelNum: 3,
        title: "The Symbiotic Secret",
        sfx: "ZOOM IN! MICRO-VIEW!",
        narrative: "Nami magnifies a single living coral polyp to reveal the microscopic cellular alliance that powers the entire reef.",
        speechBubbles: [
          { speaker: "Nami", text: "Look at the cellular level, Kai! The coral animal provides the algae with a protected home and carbon dioxide.", x: 42, y: 20, tail: "bottom" },
          { speaker: "Kai", text: "In return, the zooxanthellae photosynthesize, providing up to 90% of the coral's energy needs through sugars and amino acids!", x: 62, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#042f2e"/>
          <!-- Giant coral polyp body -->
          <path d="M 120 400 Q 150 200 300 200 Q 450 200 480 400 Z" fill="#f43f5e" opacity="0.8"/>
          <!-- Tentacles extending upward -->
          <path d="M 200 210 Q 180 80 160 50 Q 190 70 220 200 Z" fill="#fb7185"/>
          <path d="M 280 200 Q 280 60 300 30 Q 320 60 320 200 Z" fill="#fb7185"/>
          <path d="M 380 210 Q 400 80 420 50 Q 390 70 360 200 Z" fill="#fb7185"/>
          <!-- Microscopic Zooxanthellae algae spheres inside tissue -->
          <g fill="#84cc16" stroke="#4d7c0f" stroke-width="2">
            <circle cx="240" cy="280" r="18"/>
            <circle cx="280" cy="320" r="22"/>
            <circle cx="340" cy="270" r="20"/>
            <circle cx="370" cy="330" r="16"/>
            <circle cx="220" cy="340" r="14"/>
          </g>
          <!-- Photosynthesis energy arrows -->
          <path d="M 290 300 L 290 240" stroke="#facc15" stroke-width="4" stroke-dasharray="6,4"/>
          <text x="300" y="380" text-anchor="middle" fill="#a7f3d0" font-family="sans-serif" font-weight="bold" font-size="14">SYMBIOTIC ZOOXANTHELLAE (ALGAE)</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 70,
          title: "Mutualism in Nature",
          text: "Mutualism is a biological interaction where both species benefit. Corals are actually animals (cnidarians) that build mineral calcium carbonate skeletons with algal partners!"
        }
      },
      {
        panelNum: 4,
        title: "The Threat of Ocean Acidification",
        sfx: "CORRODE! SIZZLE!",
        narrative: "Nami analyzes the water chemistry. Excess atmospheric CO2 absorbed by seawater forms carbonic acid, lowering the ocean pH.",
        speechBubbles: [
          { speaker: "Nami", text: "Ocean pH has dropped from 8.2 to 8.1. That 0.1 drop represents a 30% increase in ocean acidity!", x: 45, y: 22, tail: "bottom" },
          { speaker: "Kai", text: "When acidity rises, carbonate ions bond with hydrogen instead of calcium! Baby corals can't build their calcium carbonate skeletons!", x: 65, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#18181b"/>
          <!-- Chemical Equation Display -->
          <rect x="50" y="40" width="500" height="80" rx="8" fill="#27272a" stroke="#a1a1aa" stroke-width="2"/>
          <text x="300" y="75" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="18" font-weight="bold">CO2 + H2O → H2CO3 → H+ + HCO3-</text>
          <text x="300" y="105" text-anchor="middle" fill="#fca5a5" font-family="sans-serif" font-size="13">Free H+ ions deplete Carbonate (CO3^2-) needed for Corals!</text>
          <!-- Weakening shell visual -->
          <g transform="translate(180, 160)">
            <!-- Fragile brittle coral skeleton dissolving -->
            <path d="M 80 180 L 120 70 L 150 120 L 180 50 L 210 180 Z" fill="#e4e4e7" stroke="#ef4444" stroke-width="3" stroke-dasharray="10,6"/>
            <!-- Floating calcium bubbles -->
            <circle cx="100" cy="110" r="6" fill="#f87171"/>
            <circle cx="170" cy="90" r="5" fill="#f87171"/>
            <circle cx="200" cy="130" r="7" fill="#f87171"/>
          </g>
          <g transform="translate(40, 260)">
            <rect x="0" y="0" width="160" height="70" rx="6" fill="#7f1d1d"/>
            <text x="80" y="30" text-anchor="middle" fill="#fee2e2" font-size="12" font-weight="bold">CALCIUM CARBONATE</text>
            <text x="80" y="52" text-anchor="middle" fill="#fca5a5" font-size="14" font-weight="bold">DISSOLVING</text>
          </g>
        </svg>`,
        hotspot: {
          x: 50,
          y: 20,
          title: "The Ocean as a Carbon Sink",
          text: "Oceans absorb roughly 25-30% of human carbon dioxide emissions annually. While this buffers planetary atmospheric warming, it fundamentally alters marine chemistry."
        }
      },
      {
        panelNum: 5,
        title: "The Coral Nursery: Hope in Action",
        sfx: "SPROUT! THRIVE!",
        narrative: "Kai and Nami arrive at the underwater restoration sanctuary. Marine scientists and community volunteers have established coral nurseries.",
        speechBubbles: [
          { speaker: "Kai", text: "Look here! By fragmenting heat-resilient coral colonies, they grow 40 times faster on these mineral nursery frames!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Nami", text: "Micro-fragmentation allows sister colonies to recognize and fuse back together into mature, spawning reefs in just months!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nurseryBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0f766e"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#nurseryBg)"/>
          <!-- Underwater nursery structure / tree frame -->
          <g stroke="#ffffff" stroke-width="4">
            <line x1="300" y1="400" x2="300" y2="100"/>
            <line x1="200" y1="160" x2="400" y2="160"/>
            <line x1="170" y1="240" x2="430" y2="240"/>
            <line x1="140" y1="320" x2="460" y2="320"/>
          </g>
          <!-- Healthy bright green & pink coral fragments hanging -->
          <g fill="#10b981" stroke="#059669" stroke-width="2">
            <circle cx="200" cy="180" r="15"/>
            <circle cx="400" cy="180" r="16"/>
            <circle cx="170" cy="265" r="18"/>
            <circle cx="430" cy="265" r="18"/>
            <circle cx="140" cy="350" r="22"/>
            <circle cx="460" cy="350" r="22"/>
          </g>
          <g fill="#f43f5e" stroke="#e11d48" stroke-width="2">
            <circle cx="250" cy="180" r="14"/>
            <circle cx="350" cy="180" r="14"/>
            <circle cx="230" cy="265" r="17"/>
            <circle cx="370" cy="265" r="17"/>
            <circle cx="220" cy="350" r="20"/>
            <circle cx="380" cy="350" r="20"/>
          </g>
          <text x="300" y="50" text-anchor="middle" fill="#facc15" font-family="'Bangers', sans-serif" font-size="22">HEAT-RESILIENT CORAL GARDENING</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 40,
          title: "Coral Micro-Fragmentation",
          text: "Pioneered by marine biologists, cutting corals into small fragments stimulates rapid healing and growth rates up to 40x normal speed, enabling rapid re-seeding of degraded reefs."
        }
      },
      {
        panelNum: 6,
        title: "Guardians of the Blue Planet",
        sfx: "EMPOWER! PROTECT!",
        narrative: "Surfacing under the sunset sky, Kai shares their mission data with the global youth climate coalition.",
        speechBubbles: [
          { speaker: "Kai", text: "Education is our greatest conservation tool! When students learn the science of the reef, they become champions for clean energy and ocean protection!", x: 45, y: 22, tail: "bottom" },
          { speaker: "Nami", text: "Upload complete! Reaching 100,000 classrooms worldwide. Together, we can restore balance to the whispers of the reef!", x: 68, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f97316"/>
              <stop offset="40%" stop-color="#ec4899"/>
              <stop offset="70%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0c4a6e"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#sunsetSky)"/>
          <!-- Sun dipping into water -->
          <circle cx="300" cy="260" r="70" fill="#facc15"/>
          <!-- Ocean surface waves -->
          <path d="M 0 280 Q 75 260 150 280 T 300 280 T 450 280 T 600 280 L 600 400 L 0 400 Z" fill="#0369a1"/>
          <!-- Research vessel in distance -->
          <polygon points="450,260 520,260 510,240 470,240" fill="#ffffff"/>
          <line x1="490" y1="240" x2="490" y2="215" stroke="#ffffff" stroke-width="2"/>
          <!-- Kai surfacing with mask on forehead -->
          <g transform="translate(160, 240)">
            <ellipse cx="60" cy="50" rx="25" ry="30" fill="#fed7aa"/>
            <rect x="42" y="30" width="36" height="14" rx="4" fill="#0284c7"/>
            <path d="M 45 65 Q 60 80 75 65" stroke="#b45309" stroke-width="3" fill="none"/>
          </g>
          <!-- Nami hovering above water -->
          <g transform="translate(360, 160)">
            <ellipse cx="30" cy="25" rx="28" ry="18" fill="#047857" stroke="#10b981" stroke-width="3"/>
            <circle cx="48" cy="25" r="8" fill="#34d399"/>
            <!-- Radio signal waves -->
            <path d="M 65 15 A 15 15 0 0 1 65 35" stroke="#facc15" stroke-width="3" fill="none"/>
            <path d="M 75 5 A 25 25 0 0 1 75 45" stroke="#facc15" stroke-width="3" fill="none"/>
          </g>
          <!-- Mission badge -->
          <rect x="160" y="330" width="280" height="45" rx="22" fill="#022c22" stroke="#10b981" stroke-width="2"/>
          <text x="300" y="358" text-anchor="middle" fill="#34d399" font-family="'Bangers', sans-serif" font-size="18">SDG 4 & 14: MARINE LITERACY UNLOCKED!</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 85,
          title: "SDG Target 14.2 & SDG 4",
          text: "Target 14.2 focuses on sustainable management and protection of marine ecosystems, while SDG 4 provides the education and scientific literacy necessary to drive innovation."
        }
      }
    ],
    quiz: [
      {
        question: "What is the primary cause of coral bleaching during ocean heatwaves?",
        options: [
          "Corals running out of salt in seawater",
          "Corals expelling their symbiotic photosynthetic algae (zooxanthellae) due to thermal stress",
          "Fish eating the outer skin of coral colonies",
          "Excessive rainfall darkening the ocean"
        ],
        correct: 1,
        explanation: "When water temperatures stay elevated, corals experience heat stress and expel their symbiotic zooxanthellae algae, losing both their primary food source and vibrant pigmentation."
      },
      {
        question: "How does rising atmospheric CO2 contribute to ocean acidification?",
        options: [
          "CO2 turns into liquid plastic on the seafloor",
          "CO2 dissolves in seawater to form carbonic acid, reducing carbonate ions needed to build shells and skeletons",
          "CO2 creates giant whirlpools that drown marine organisms",
          "CO2 causes underwater volcanic eruptions"
        ],
        correct: 1,
        explanation: "Absorbed CO2 reacts with water to form carbonic acid (H2CO3), releasing hydrogen ions that bind to carbonate ions, leaving corals with insufficient building blocks for calcium carbonate skeletons."
      },
      {
        question: "Why is coral micro-fragmentation considered a breakthrough restoration technique?",
        options: [
          "It permanently turns corals into freshwater plants",
          "It accelerates coral growth rates by up to 40x and allows clones to fuse into mature colonies rapidly",
          "It allows corals to grow on dry land",
          "It eliminates the need for sunlight"
        ],
        correct: 1,
        explanation: "Micro-fragmentation cuts corals into 1-centimeter pieces, stimulating rapid self-repair growth. Clones from the same parent recognize each other and fuse seamlessly into adult structures."
      }
    ]
  },
  {
    id: "byte-algorithm",
    title: "Byte & The Algorithm Citadel",
    slug: "byte-algorithm",
    tagline: "Master computational thinking and sorting efficiency to prevent a server meltdown!",
    sdg: "SDG 4: Quality Education (Computational Thinking)",
    category: "Computer Science",
    categoryBadgeColor: "#8b5cf6",
    author: "Computational Literacy Press",
    illustrator: "CurioComics Creative Studio",
    readingTime: "6 min read",
    level: "High School / College",
    issue: "Vol. 1 • Issue #03",
    featured: false,
    rating: 4.9,
    readsCount: "9.4k",
    heroGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
    accentColor: "#a855f7",
    summary: "When a billion unordered packets swamp the Bitville Central Router, digital courier Byte must choose between slow O(N^2) brute force and elegant O(N log N) divide-and-conquer strategies before buffer overflow occurs!",
    learningObjectives: [
      "Understand the mechanics of sorting: comparison-based vs divide-and-conquer.",
      "Grasp Big-O asymptotic notation and computational complexity (O(N^2) vs O(N log N)).",
      "Learn how efficient algorithms optimize global computational energy and data infrastructure."
    ],
    coverSvg: `<svg viewBox="0 0 400 500" class="comic-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="algoBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#4c1d95"/>
          <stop offset="60%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#090514"/>
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#algoBg)"/>
      <!-- Matrix rain binary code lines -->
      <g fill="#a855f7" opacity="0.3" font-family="monospace" font-size="12">
        <text x="30" y="80">0101010101</text>
        <text x="30" y="100">1100101001</text>
        <text x="320" y="120">10110011</text>
        <text x="320" y="140">00101101</text>
      </g>
      <!-- Sorting bars graphic -->
      <g transform="translate(60, 200)">
        <rect x="20" y="80" width="22" height="120" fill="#f43f5e" rx="4"/>
        <rect x="55" y="40" width="22" height="160" fill="#f59e0b" rx="4"/>
        <rect x="90" y="110" width="22" height="90" fill="#10b981" rx="4"/>
        <rect x="125" y="10" width="22" height="190" fill="#38bdf8" rx="4"/>
        <rect x="160" y="60" width="22" height="140" fill="#8b5cf6" rx="4"/>
        <rect x="195" y="140" width="22" height="60" fill="#ec4899" rx="4"/>
      </g>
      <!-- Byte character -->
      <g transform="translate(150, 80)">
        <rect x="20" y="20" width="60" height="50" rx="10" fill="#38bdf8" stroke="#ffffff" stroke-width="3"/>
        <!-- Eyes -->
        <circle cx="38" cy="45" r="7" fill="#0f172a"/>
        <circle cx="62" cy="45" r="7" fill="#0f172a"/>
        <circle cx="40" cy="43" r="2" fill="#ffffff"/>
        <circle cx="64" cy="43" r="2" fill="#ffffff"/>
        <!-- Antenna -->
        <line x1="50" y1="20" x2="50" y2="5" stroke="#ffffff" stroke-width="3"/>
        <circle cx="50" cy="5" r="5" fill="#facc15"/>
      </g>
      <!-- Title banner -->
      <rect x="25" y="410" width="350" height="65" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="3"/>
      <text x="200" y="438" text-anchor="middle" font-family="'Bangers', 'Impact', sans-serif" font-size="24" fill="#facc15" letter-spacing="1">BYTE & THE ALGORITHM</text>
      <text x="200" y="460" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="#c084fc">CITADEL OF COMPUTING</text>
    </svg>`,
    panels: [
      {
        panelNum: 1,
        title: "The Unsorted Tsunami",
        sfx: "SIREN! WEEP-WOOP!",
        narrative: "Inside the Central Router of Bitville. Millions of unsorted packets are backlogging the buffer, threatening total network congestion.",
        speechBubbles: [
          { speaker: "Byte", text: "Chief! We have 10,000,000 data packets arriving out of order! If we don't sort them by timestamp in 30 seconds, the gateway crashes!", x: 45, y: 22, tail: "bottom" },
          { speaker: "System Core", text: "Warning: Buffer at 94% capacity! Choose an algorithm immediately!", x: 70, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#0f0728"/>
          <!-- Circuit board lines -->
          <g stroke="#6b21a8" stroke-width="2" fill="none">
            <path d="M 0 50 L 200 50 L 250 100 L 400 100"/>
            <path d="M 0 350 L 150 350 L 220 280 L 600 280"/>
          </g>
          <!-- Chaotic falling unsorted packets -->
          <g fill="#ec4899" stroke="#be185d" stroke-width="2">
            <rect x="80" y="100" width="45" height="35" rx="4" transform="rotate(15 80 100)"/>
            <rect x="220" y="80" width="45" height="35" rx="4" transform="rotate(-20 220 80)"/>
            <rect x="360" y="110" width="45" height="35" rx="4" transform="rotate(35 360 110)"/>
            <rect x="480" y="70" width="45" height="35" rx="4" transform="rotate(-10 480 70)"/>
          </g>
          <!-- Buffer Gauge -->
          <rect x="180" y="290" width="240" height="25" rx="6" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
          <rect x="182" y="292" width="225" height="21" rx="4" fill="#ef4444"/>
          <text x="300" y="307" text-anchor="middle" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">BUFFER: 94% FULL</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 75,
          title: "Why Sorting Matters",
          text: "Search, indexing, graphics rendering, and network routing all rely on sorted data. Finding an item in unsorted data takes O(N) linear time, but in sorted data it takes O(log N) binary search time!"
        }
      },
      {
        panelNum: 2,
        title: "The Trap of O(N^2) Bubble Sort",
        sfx: "CLUNK! DRAG! SLOWWW!",
        narrative: "Junior bot Bitto suggests running a simple Bubble Sort: comparing adjacent pairs and swapping them one by one.",
        speechBubbles: [
          { speaker: "Bitto", text: "Why not just compare neighbor to neighbor and swap them? It's so simple to code in three lines!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Byte", text: "No, Bitto! For N = 10,000,000 packets, N squared equals 100 TRILLION operations! That would take 27 hours! The server will fry!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#18181b"/>
          <!-- Slow snail graphic -->
          <ellipse cx="260" cy="240" rx="90" ry="60" fill="#ca8a04"/>
          <circle cx="260" cy="240" r="40" fill="none" stroke="#713f12" stroke-width="4"/>
          <path d="M 170 270 Q 260 290 380 270" stroke="#ca8a04" stroke-width="20" stroke-linecap="round"/>
          <circle cx="370" cy="230" r="15" fill="#facc15"/>
          <!-- Math equation overlay -->
          <rect x="60" y="50" width="480" height="70" rx="8" fill="#27272a" stroke="#eab308" stroke-width="2"/>
          <text x="300" y="80" text-anchor="middle" fill="#eab308" font-family="monospace" font-size="18" font-weight="bold">BUBBLE SORT: O(N^2) TIME COMPLEXITY</text>
          <text x="300" y="105" text-anchor="middle" fill="#fef08a" font-family="monospace" font-size="13">10^7 elements → (10^7)^2 = 10^14 step evaluations!</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 20,
          title: "Quadratic Growth Explained",
          text: "An algorithm with O(N^2) complexity doubles its problem size and quadruples the execution time. For large datasets, quadratic algorithms are practically unusable."
        }
      },
      {
        panelNum: 3,
        title: "The Divide-and-Conquer Revelation",
        sfx: "SPLIT! PARTITION!",
        narrative: "Byte summons the QuickSort / MergeSort Protocol. The key is dividing a seemingly impossible problem into bite-sized subproblems.",
        speechBubbles: [
          { speaker: "Byte", text: "Observe the power of Divide and Conquer! We pick a pivot element, split the array into 'smaller than' and 'greater than' piles!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Bitto", text: "And then we recurse on both sub-piles until we hit base cases of single elements! Brilliant!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#0f172a"/>
          <!-- Tree partition diagram -->
          <rect x="230" y="40" width="140" height="40" rx="6" fill="#6366f1"/>
          <text x="300" y="65" text-anchor="middle" fill="#ffffff" font-family="monospace" font-weight="bold">[9, 2, 7, 4, 1, 8]</text>
          <!-- Split arrows -->
          <path d="M 270 85 L 180 140" stroke="#38bdf8" stroke-width="3"/>
          <path d="M 330 85 L 420 140" stroke="#38bdf8" stroke-width="3"/>
          <!-- Level 1 sub arrays -->
          <rect x="120" y="140" width="120" height="35" rx="6" fill="#3b82f6"/>
          <text x="180" y="163" text-anchor="middle" fill="#ffffff" font-family="monospace">[2, 1, 4]</text>
          <rect x="360" y="140" width="120" height="35" rx="6" fill="#3b82f6"/>
          <text x="420" y="163" text-anchor="middle" fill="#ffffff" font-family="monospace">[7, 9, 8]</text>
          <!-- Level 2 sub arrays -->
          <path d="M 150 180 L 100 230" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 210 180 L 240 230" stroke="#38bdf8" stroke-width="2"/>
          <rect x="70" y="230" width="60" height="30" rx="4" fill="#0284c7"/>
          <text x="100" y="250" text-anchor="middle" fill="#ffffff" font-family="monospace">[1, 2]</text>
          <rect x="220" y="230" width="40" height="30" rx="4" fill="#0284c7"/>
          <text x="240" y="250" text-anchor="middle" fill="#ffffff" font-family="monospace">[4]</text>
          <text x="300" y="340" text-anchor="middle" fill="#facc15" font-family="'Bangers', sans-serif" font-size="22">RECURSIVE RECOMBINATION: TREE DEPTH = LOG2(N)</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 85,
          title: "Logarithmic Tree Depth",
          text: "Repeatedly dividing a list of size N in half requires log2(N) levels of division. For N = 1,000,000, log2(N) is only ~20 levels!"
        }
      },
      {
        panelNum: 4,
        title: "The Lightning Sort",
        sfx: "SWISH! ORDER RESTORED!",
        narrative: "Executing Merge-QuickSort hybrid on the parallel processing cores. The unsorted torrent collapses into a pristine ordered stream.",
        speechBubbles: [
          { speaker: "Byte", text: "Look at the telemetry! O(N log N) requires only 2.3 * 10^8 operations instead of 10^14! Execution time: 0.18 SECONDS!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Bitto", text: "The CPU temperature is dropping! The packets are streaming through the gateway in exact timestamp order!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#052e16"/>
          <!-- Beautiful perfectly ordered ascending rainbow bars -->
          <g transform="translate(60, 140)">
            <rect x="0" y="160" width="30" height="40" fill="#ef4444" rx="3"/>
            <rect x="36" y="135" width="30" height="65" fill="#f97316" rx="3"/>
            <rect x="72" y="110" width="30" height="90" fill="#facc15" rx="3"/>
            <rect x="108" y="85" width="30" height="115" fill="#22c55e" rx="3"/>
            <rect x="144" y="60" width="30" height="140" fill="#06b6d4" rx="3"/>
            <rect x="180" y="35" width="30" height="165" fill="#3b82f6" rx="3"/>
            <rect x="216" y="10" width="30" height="190" fill="#8b5cf6" rx="3"/>
            <rect x="252" y="-15" width="30" height="215" fill="#ec4899" rx="3"/>
          </g>
          <!-- Happy Byte cheering -->
          <g transform="translate(420, 160)">
            <rect x="0" y="0" width="70" height="60" rx="12" fill="#38bdf8" stroke="#ffffff" stroke-width="3"/>
            <circle cx="20" cy="25" r="8" fill="#ffffff"/>
            <circle cx="50" cy="25" r="8" fill="#ffffff"/>
            <circle cx="20" cy="25" r="4" fill="#0f172a"/>
            <circle cx="50" cy="25" r="4" fill="#0f172a"/>
            <path d="M 22 45 Q 35 55 48 45" stroke="#0f172a" stroke-width="3" fill="none"/>
          </g>
          <text x="300" y="50" text-anchor="middle" fill="#4ade80" font-family="'Bangers', sans-serif" font-size="26">SORT COMPLETED IN 0.18 SECONDS!</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 20,
          title: "O(N log N) Optimality",
          text: "Mathematical proof: Any comparison-based sorting algorithm has a lower bound of Ω(N log N) in the worst case. You cannot beat this without non-comparison sorts like Radix or Counting Sort!"
        }
      },
      {
        panelNum: 5,
        title: "Energy Efficiency & Green Computing",
        sfx: "HUMMM... ECO-POWER!",
        narrative: "Algorithmic efficiency is not just about speed; it directly saves electricity, reduces server cooling demands, and lowers carbon footprints.",
        speechBubbles: [
          { speaker: "Byte", text: "Did you know, Bitto? Data centers consume over 1% of the world's total electricity! Inefficient code literally burns fossil fuels!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Bitto", text: "By choosing O(N log N) over O(N^2), we just saved 450 Megawatt-hours of unnecessary CPU computation!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#064e3b"/>
          <!-- Green leaf wrapping digital chip -->
          <rect x="220" y="130" width="160" height="140" rx="16" fill="#1e293b" stroke="#34d399" stroke-width="4"/>
          <!-- Silicon chip gold pins -->
          <g stroke="#facc15" stroke-width="3">
            <line x1="200" y1="160" x2="220" y2="160"/>
            <line x1="200" y1="200" x2="220" y2="200"/>
            <line x1="200" y1="240" x2="220" y2="240"/>
            <line x1="380" y1="160" x2="400" y2="160"/>
            <line x1="380" y1="200" x2="400" y2="200"/>
            <line x1="380" y1="240" x2="400" y2="240"/>
          </g>
          <!-- Glowing green leaf shape -->
          <path d="M 300 150 C 350 170, 350 230, 300 250 C 250 230, 250 170, 300 150 Z" fill="#10b981" filter="drop-shadow(0 0 12px #34d399)"/>
          <text x="300" y="60" text-anchor="middle" fill="#facc15" font-family="'Bangers', sans-serif" font-size="24">GREEN COMPUTING & ALGORITHMIC EFFICIENCY</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 80,
          title: "Green Software Engineering",
          text: "Green coding focuses on minimizing energy consumption of software. Designing lean algorithms directly supports SDG 12 (Responsible Consumption) and SDG 13 (Climate Action)."
        }
      },
      {
        panelNum: 6,
        title: "The Computational Mindset",
        sfx: "LEVEL UP! SKILLS ACHIEVED!",
        narrative: "Byte and Bitto celebrate at the summit of the Citadel. Computational thinking is a superpower for the 21st century.",
        speechBubbles: [
          { speaker: "Byte", text: "Decomposition, pattern recognition, abstraction, and algorithms: with these four pillars, no complex problem is unconquerable!", x: 45, y: 22, tail: "bottom" },
          { speaker: "System Core", text: "Citizens of Bitville salute you! Literacy in code is literacy in shaping tomorrow!", x: 68, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="citadelSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#312e81"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#citadelSky)"/>
          <!-- Futuristic Citadel towers in background -->
          <polygon points="120,400 120,180 180,180 180,400" fill="#1e1b4b"/>
          <polygon points="220,400 220,120 280,120 280,400" fill="#312e81"/>
          <polygon points="320,400 320,100 400,100 400,400" fill="#1e1b4b"/>
          <polygon points="440,400 440,200 500,200 500,400" fill="#312e81"/>
          <!-- Neon lights -->
          <circle cx="360" cy="90" r="10" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)"/>
          <!-- 4 Pillars Banner -->
          <rect x="100" y="320" width="400" height="50" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="3"/>
          <text x="300" y="352" text-anchor="middle" fill="#c084fc" font-family="'Bangers', sans-serif" font-size="18">SDG 4: COMPUTATIONAL LITERACY CERTIFIED!</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 88,
          title: "The 4 Pillars of Computational Thinking",
          text: "1) Decomposition (breaking down), 2) Pattern Recognition (spotting similarities), 3) Abstraction (filtering noise to focus on essentials), and 4) Algorithm Design (step-by-step instructions)."
        }
      }
    ],
    quiz: [
      {
        question: "Why is Bubble Sort considered impractical for sorting 10 million elements?",
        options: [
          "It only works on English words, not numbers",
          "Its O(N^2) time complexity causes computation steps to balloon to roughly 100 trillion operations",
          "It permanently damages the computer monitor",
          "It requires 50 gigabytes of internet bandwidth"
        ],
        correct: 1,
        explanation: "Bubble Sort requires roughly N*(N-1)/2 comparisons in the average and worst case. For 10 million items, this requires on the order of 10^14 steps, taking hours or days."
      },
      {
        question: "What core algorithmic paradigm allows MergeSort and QuickSort to achieve O(N log N) performance?",
        options: [
          "Brute Force trial and error",
          "Divide and Conquer: breaking the problem recursively into sub-problems and recombining",
          "Randomly shuffling elements until ordered",
          "Multiplying all numbers by zero"
        ],
        correct: 1,
        explanation: "Divide and Conquer breaks down the large array recursively until small, easily handled subarrays remain, cutting computational work from quadratic down to linearithmic."
      },
      {
        question: "How does algorithmic efficiency support sustainable development and green computing?",
        options: [
          "It paints the server rack green",
          "It reduces unnecessary processor cycles, saving massive electrical energy and reducing data center carbon footprints",
          "It forces computers to run only at night",
          "It converts digital bytes into organic fertilizer"
        ],
        correct: 1,
        explanation: "Optimized algorithms drastically cut down the number of CPU instructions executed, resulting in less power draw, reduced heat production, and lower cooling costs for global data centers."
      }
    ]
  },
  {
    id: "alexandria-scrolls",
    title: "Chronicles of Alexandria: The Lost Scrolls",
    slug: "alexandria-scrolls",
    tagline: "Journey back to ancient Egypt to preserve world heritage and scientific discoveries!",
    sdg: "SDG 4: Quality Education (Historical & Cultural Literacy)",
    category: "History & Culture",
    categoryBadgeColor: "#d97706",
    author: "Heritage Preservation Collective",
    illustrator: "CurioComics Creative Studio",
    readingTime: "5 min read",
    level: "Middle / High School",
    issue: "Vol. 1 • Issue #04",
    featured: false,
    rating: 4.8,
    readsCount: "8.1k",
    heroGradient: "linear-gradient(135deg, #451a03 0%, #78350f 50%, #b45309 100%)",
    accentColor: "#f59e0b",
    summary: "Time-historian Tara travels to 240 BCE to study under Eratosthenes at the Great Library of Alexandria. Experience how ancient geometry measured Earth's circumference and why open public knowledge must be fiercely protected.",
    learningObjectives: [
      "Understand the historical significance of the Great Library of Alexandria in promoting cross-cultural scholarship.",
      "Reconstruct Eratosthenes' geometric calculation of the Earth's circumference using shadows and angles.",
      "Appreciate the vital importance of preserving scientific heritage and open access to educational archives."
    ],
    coverSvg: `<svg viewBox="0 0 400 500" class="comic-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="alexBg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="50%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#451a03"/>
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#alexBg)"/>
      <!-- Ancient Greek columns -->
      <g fill="#fef3c7" stroke="#d97706" stroke-width="2">
        <rect x="40" y="160" width="30" height="240" rx="3"/>
        <rect x="330" y="160" width="30" height="240" rx="3"/>
        <!-- Pediment roof -->
        <polygon points="20,160 200,80 380,160"/>
      </g>
      <!-- Ancient Papyrus Scroll with geometry -->
      <g transform="translate(100, 200)">
        <rect x="0" y="0" width="200" height="130" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
        <!-- Earth curvature and sun rays -->
        <circle cx="100" cy="180" r="100" fill="none" stroke="#b45309" stroke-width="3"/>
        <line x1="60" y1="20" x2="60" y2="80" stroke="#d97706" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="140" y1="20" x2="140" y2="80" stroke="#d97706" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="100" y="115" text-anchor="middle" fill="#78350f" font-family="serif" font-weight="bold" font-size="12">θ = 7.2° = 1/50th of 360°</text>
      </g>
      <!-- Title banner -->
      <rect x="25" y="410" width="350" height="65" rx="8" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
      <text x="200" y="438" text-anchor="middle" font-family="'Bangers', 'Impact', sans-serif" font-size="24" fill="#facc15" letter-spacing="1">CHRONICLES OF ALEXANDRIA</text>
      <text x="200" y="460" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="#fed7aa">THE LOST SCROLLS & EARTH'S SHADOW</text>
    </svg>`,
    panels: [
      {
        panelNum: 1,
        title: "The Great Beacon of Antiquity",
        sfx: "ECHO! GREEK VOICES!",
        narrative: "Alexandria, Egypt, 240 BCE. Tara steps into the grand colonnade of the Mouseion, home to half a million papyrus scrolls from every corner of the known world.",
        speechBubbles: [
          { speaker: "Tara", text: "Incredible! Scholars from Greece, Egypt, Persia, and India all gathered under one roof to debate mathematics, poetry, and medicine!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Librarian", text: "Welcome, seeker. Knowledge belongs to no single empire; it belongs to whoever is humble enough to inquire!", x: 70, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#fef3c7"/>
          <!-- Marble columns and grand arches -->
          <g fill="#fde68a" stroke="#d97706" stroke-width="3">
            <rect x="60" y="80" width="40" height="280"/>
            <rect x="180" y="80" width="40" height="280"/>
            <rect x="380" y="80" width="40" height="280"/>
            <rect x="500" y="80" width="40" height="280"/>
            <path d="M 60 80 Q 140 10 220 80" fill="none"/>
            <path d="M 380 80 Q 460 10 540 80" fill="none"/>
          </g>
          <!-- Scroll cubby shelves -->
          <rect x="240" y="100" width="120" height="180" fill="#78350f"/>
          <g fill="#fef08a" stroke="#92400e" stroke-width="2">
            <circle cx="260" cy="130" r="10"/>
            <circle cx="300" cy="130" r="10"/>
            <circle cx="340" cy="130" r="10"/>
            <circle cx="260" cy="170" r="10"/>
            <circle cx="300" cy="170" r="10"/>
            <circle cx="340" cy="170" r="10"/>
            <circle cx="260" cy="210" r="10"/>
            <circle cx="300" cy="210" r="10"/>
            <circle cx="340" cy="210" r="10"/>
          </g>
          <text x="300" y="340" text-anchor="middle" fill="#78350f" font-family="'Bangers', sans-serif" font-size="22">THE MOUSEION: EPICENTER OF HUMAN LEARNING</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 85,
          title: "The Universal Library",
          text: "Ptolemy I founded the Library of Alexandria with the ambitious goal of collecting a copy of every written work in existence. Ships arriving in port were searched for books to copy!"
        }
      },
      {
        panelNum: 2,
        title: "The Mystery of the Syene Well",
        sfx: "PONDER... SUNBEAM!",
        narrative: "Head Librarian Eratosthenes reviews a travel report from the southern city of Syene (modern Aswan).",
        speechBubbles: [
          { speaker: "Eratosthenes", text: "Look at this letter from Syene! At noon on the summer solstice, a vertical stick casts no shadow, and the sun shines straight down to the bottom of a deep water well!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Tara", text: "Because the sun is directly overhead at the Tropic of Cancer! But what about here in Alexandria?", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#fffbeb"/>
          <!-- Sun directly overhead -->
          <circle cx="300" cy="60" r="45" fill="#f59e0b" filter="drop-shadow(0 0 16px #f59e0b)"/>
          <!-- Sun rays going down into well -->
          <polygon points="270,105 330,105 330,340 270,340" fill="#fef08a" opacity="0.6"/>
          <!-- Ancient stone well -->
          <rect x="230" y="240" width="140" height="120" fill="#78350f" stroke="#451a03" stroke-width="3"/>
          <ellipse cx="300" cy="240" rx="70" ry="25" fill="#38bdf8"/>
          <!-- Label -->
          <rect x="80" y="280" width="130" height="50" rx="6" fill="#451a03"/>
          <text x="145" y="305" text-anchor="middle" fill="#fde68a" font-size="12" font-weight="bold">SYENE WELL</text>
          <text x="145" y="322" text-anchor="middle" fill="#ffffff" font-size="10">SHADOW = 0.0°</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 15,
          title: "The Tropic of Cancer",
          text: "At latitude ~23.4° N, the sun reaches its zenith (exactly 90° above horizon) on the Summer Solstice (June 21), casting zero vertical shadow."
        }
      },
      {
        panelNum: 3,
        title: "Measuring with a Stick and Geometry",
        sfx: "SCRIBE! ANGLE MEASURED!",
        narrative: "At that exact same hour on solstice day in Alexandria, Eratosthenes plants a vertical gnomon (measuring rod) in the ground.",
        speechBubbles: [
          { speaker: "Eratosthenes", text: "Look, Tara! In Alexandria, the stick DOES cast a shadow! The angle between the rod and the sun's rays is exactly 7.2 degrees!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Tara", text: "If the Earth were flat, both shadows would be identical! The curved shadow proves the Earth is a round sphere!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#0f172a"/>
          <!-- Curved Earth Slice -->
          <path d="M 0 350 Q 300 220 600 350" stroke="#38bdf8" stroke-width="4" fill="#0369a1"/>
          <!-- Vertical rod in Alexandria with shadow -->
          <line x1="180" y1="265" x2="180" y2="150" stroke="#facc15" stroke-width="4"/>
          <!-- Shadow line on ground -->
          <line x1="180" y1="265" x2="225" y2="265" stroke="#ef4444" stroke-width="6"/>
          <!-- Sun angle ray -->
          <line x1="180" y1="150" x2="225" y2="265" stroke="#facc15" stroke-width="2" stroke-dasharray="6,4"/>
          <!-- Angle arc -->
          <path d="M 180 180 A 30 30 0 0 1 195 188" stroke="#ef4444" stroke-width="3" fill="none"/>
          <text x="210" y="180" fill="#ef4444" font-weight="bold" font-size="14">θ = 7.2°</text>
          <!-- Vertical rod in Syene (no shadow) -->
          <line x1="440" y1="285" x2="480" y2="175" stroke="#facc15" stroke-width="4"/>
          <text x="180" y="320" text-anchor="middle" fill="#f8fafc" font-size="12">ALEXANDRIA (7.2° shadow)</text>
          <text x="460" y="320" text-anchor="middle" fill="#f8fafc" font-size="12">SYENE (0° shadow)</text>
        </svg>`,
        hotspot: {
          x: 35,
          y: 45,
          title: "Alternate Interior Angles",
          text: "Because the sun's rays arrive parallel, the angle of the shadow at the surface (7.2°) is geometrically identical to the angle subtended at the very center of the Earth!"
        }
      },
      {
        panelNum: 4,
        title: "The Mathematical Calculation",
        sfx: "EUREKA! ACCURACY!",
        narrative: "Eratosthenes converts the angular fraction into Earth's planetary circumference.",
        speechBubbles: [
          { speaker: "Eratosthenes", text: "A full circle is 360 degrees. 7.2 degrees is exactly 1/50th of a complete circle!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Tara", text: "The distance from Alexandria to Syene is 5,000 stadia (about 800 km). Multiply 5,000 stadia by 50... Earth's circumference is 250,000 stadia (~40,000 km)!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#1e1b4b"/>
          <!-- Earth sphere diagram with center angle -->
          <circle cx="300" cy="200" r="140" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="300" cy="200" r="4" fill="#facc15"/>
          <line x1="300" y1="200" x2="250" y2="70" stroke="#facc15" stroke-width="3"/>
          <line x1="300" y1="200" x2="350" y2="70" stroke="#facc15" stroke-width="3"/>
          <path d="M 285 160 A 45 45 0 0 1 315 160" stroke="#f43f5e" stroke-width="3" fill="none"/>
          <text x="300" y="150" text-anchor="middle" fill="#f43f5e" font-weight="bold" font-size="14">7.2°</text>
          <!-- Formula Box -->
          <rect x="50" y="310" width="500" height="65" rx="8" fill="#0f172a" stroke="#facc15" stroke-width="2"/>
          <text x="300" y="338" text-anchor="middle" fill="#facc15" font-family="monospace" font-size="16" font-weight="bold">Circumference = 50 × 800 km = 40,000 km</text>
          <text x="300" y="360" text-anchor="middle" fill="#a5b4fc" font-size="12">Actual modern value: 40,075 km — Over 99% Accurate in 240 BCE!</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 85,
          title: "Astounding Historical Precision",
          text: "Without satellites, planes, or modern calculators, Eratosthenes calculated Earth's circumference with less than 2% error using simple shadows, pacing strides, and Euclidean geometry!"
        }
      },
      {
        panelNum: 5,
        title: "The Tragedy of Lost Knowledge",
        sfx: "FIRE! CRACKLE! RESCUE!",
        narrative: "Decades later, fires and neglect devastated the Great Library, destroying hundreds of thousands of irreplaceable scrolls of medicine, mathematics, and philosophy.",
        speechBubbles: [
          { speaker: "Tara", text: "Look at what was lost! Hero's steam engine designs, Aristarchus's heliocentric astronomy, Sappho's poetry—erased because they existed in only one place!", x: 42, y: 22, tail: "bottom" },
          { speaker: "Tara", text: "This proves why SDG 4 Quality Education demands decentralized, digitally preserved, openly accessible knowledge for all humanity!", x: 68, y: 76, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#450a0a"/>
          <!-- Flames engulfing ancient scrolls -->
          <g fill="#ef4444" opacity="0.8">
            <polygon points="100,400 150,200 200,400"/>
            <polygon points="220,400 300,160 380,400"/>
            <polygon points="400,400 480,220 540,400"/>
          </g>
          <g fill="#f59e0b" opacity="0.9">
            <polygon points="130,400 170,250 210,400"/>
            <polygon points="260,400 310,210 360,400"/>
            <polygon points="430,400 470,260 510,400"/>
          </g>
          <!-- Burning papyrus scroll -->
          <rect x="220" y="180" width="160" height="90" rx="4" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
          <path d="M 220 220 L 380 220" stroke="#78350f" stroke-width="2" stroke-dasharray="6,4"/>
          <!-- Warning banner -->
          <rect x="80" y="40" width="440" height="50" rx="8" fill="#1c1917" stroke="#ef4444" stroke-width="2"/>
          <text x="300" y="72" text-anchor="middle" fill="#fca5a5" font-family="'Bangers', sans-serif" font-size="20">CENTRALIZED KNOWLEDGE IS FRAGILE KNOWLEDGE</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 15,
          title: "The Lesson of Alexandria",
          text: "The destruction of the Library of Alexandria set scientific progress back by centuries. Today, digital open-access repositories (SDG 4) ensure human knowledge cannot be wiped out by single catastrophic events."
        }
      },
      {
        panelNum: 6,
        title: "The Modern Digital Library",
        sfx: "UPLOAD! PRESERVED FOREVER!",
        narrative: "Back in the 21st century. Tara digitizes ancient wisdom onto open educational networks accessible to children across the globe.",
        speechBubbles: [
          { speaker: "Tara", text: "Today, any student with an internet connection can read the works of Eratosthenes, Hypatia, and Ibn al-Haytham for free!", x: 45, y: 22, tail: "bottom" },
          { speaker: "Tara", text: "That is the promise of SDG 4: Quality Education for every mind, everywhere, without barriers!", x: 68, y: 78, tail: "top" }
        ],
        svgContent: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="digiSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#digiSky)"/>
          <!-- Open book glowing with digital network nodes -->
          <g transform="translate(180, 120)">
            <path d="M 0 100 Q 120 70 240 100 L 240 220 Q 120 190 0 220 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
            <path d="M 120 75 L 120 205" stroke="#94a3b8" stroke-width="3"/>
            <!-- Network lines emanating from book -->
            <line x1="60" y1="75" x2="20" y2="20" stroke="#38bdf8" stroke-width="3"/>
            <line x1="120" y1="65" x2="120" y2="5" stroke="#facc15" stroke-width="3"/>
            <line x1="180" y1="75" x2="220" y2="20" stroke="#38bdf8" stroke-width="3"/>
            <circle cx="20" cy="20" r="10" fill="#38bdf8"/>
            <circle cx="120" cy="5" r="12" fill="#facc15"/>
            <circle cx="220" cy="20" r="10" fill="#38bdf8"/>
          </g>
          <!-- Badge overlay -->
          <rect x="120" y="325" width="360" height="45" rx="22" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
          <text x="300" y="353" text-anchor="middle" fill="#facc15" font-family="'Bangers', sans-serif" font-size="18">SDG 4: UNIVERSAL ACCESS TO KNOWLEDGE</text>
        </svg>`,
        hotspot: {
          x: 50,
          y: 85,
          title: "SDG 4.7: Global Citizenship & Heritage",
          text: "Target 4.7 highlights appreciation of cultural diversity and historical contribution to sustainable development, ensuring timeless wisdom empowers modern innovation."
        }
      }
    ],
    quiz: [
      {
        question: "How did Eratosthenes deduce that the surface of the Earth is curved rather than flat?",
        options: [
          "By sailing an ancient wooden ship into space",
          "By observing that a vertical stick cast a 7.2° shadow in Alexandria while casting zero shadow at the exact same time in Syene",
          "By looking through an electronic magnifying glass",
          "By consulting a magical crystal ball"
        ],
        correct: 1,
        explanation: "If Earth were flat, sunlight would strike both identical vertical rods at the exact same angle. The existence of a 7.2° shadow difference proved the curvature of Earth's surface."
      },
      {
        question: "What fraction of a full circle (360 degrees) is 7.2 degrees?",
        options: [
          "1/10th",
          "1/25th",
          "1/50th",
          "1/100th"
        ],
        correct: 2,
        explanation: "360° ÷ 7.2° = 50. Therefore, the distance between Alexandria and Syene was 1/50th of the entire circumference of the planet Earth."
      },
      {
        question: "What crucial modern educational lesson does the destruction of the Library of Alexandria teach us?",
        options: [
          "Books should never be read by young people",
          "Centralized, single-copy repositories are vulnerable; open digital access and shared public archives protect human knowledge",
          "History and astronomy are no longer useful subjects",
          "Only stone tablets should be used for exams"
        ],
        correct: 1,
        explanation: "When knowledge exists in only one physical location, fires or wars can erase centuries of progress. Open-access digital archives (SDG 4) ensure humanity's collective wisdom remains immortal."
      }
    ]
  }
];

// Helper functions for reading progress and favorites
const StorageManager = {
  getReadProgress(comicId) {
    try {
      const data = JSON.parse(localStorage.getItem("curio_progress") || "{}");
      return data[comicId] || 0;
    } catch(e) {
      return 0;
    }
  },
  saveReadProgress(comicId, panelIndex, totalPanels) {
    try {
      const data = JSON.parse(localStorage.getItem("curio_progress") || "{}");
      data[comicId] = Math.round(((panelIndex + 1) / totalPanels) * 100);
      localStorage.setItem("curio_progress", JSON.stringify(data));
    } catch(e) {}
  },
  isFavorite(comicId) {
    try {
      const favs = JSON.parse(localStorage.getItem("curio_favs") || "[]");
      return favs.includes(comicId);
    } catch(e) {
      return false;
    }
  },
  toggleFavorite(comicId) {
    try {
      let favs = JSON.parse(localStorage.getItem("curio_favs") || "[]");
      if (favs.includes(comicId)) {
        favs = favs.filter(id => id !== comicId);
      } else {
        favs.push(comicId);
      }
      localStorage.setItem("curio_favs", JSON.stringify(favs));
      return favs.includes(comicId);
    } catch(e) {
      return false;
    }
  }
};
