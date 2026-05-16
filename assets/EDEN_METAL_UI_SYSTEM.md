# EDEN METAL — UI Design System
## Operation Prometheus · Battle Royale Puzzle Arena

> *"Where ancient intelligence meets the machine. Where nature consumes iron. Where the cipher lives."*

---

## 01 · Design Philosophy

**Eden Metal** is the collision of two extremes held in tension:

**Eden** — primordial, organic, alive. The deep breathing of ancient forest. Moss consuming iron. Living things that grow through cracks in steel. The Garden before language — raw, intelligent, unknowable.

**Metal** — cold, authoritative, unyielding. Military-grade precision. Stamped serial numbers. Heat-warped steel plates. The weight of machinery that does not forgive error.

The UI is not a screen. It is a **surface** — scarred, patinated, still warm from something that happened before the player arrived. Puzzle panels feel like they were engraved into black iron. Tokens feel minted. Lives feel biological — something you can lose and cannot replace.

**One rule above all:** Nothing here looks like software. It looks like *evidence*.

---

## 02 · Color System

### Foundation Palette

```css
:root {
  /* ── Core Voids ── */
  --void-black:     #080810;   /* primary background — deep space navy-black */
  --void-deep:      #0d0d1a;   /* surface panels */
  --void-surface:   #12121f;   /* card backgrounds */
  --void-raised:    #1a1a2e;   /* elevated elements */

  /* ── Eden Greens (organic life through metal) ── */
  --eden-root:      #0a1a0d;   /* darkest foliage — background accents */
  --eden-moss:      #1b3a1f;   /* panel borders when active */
  --eden-vine:      #2d6b35;   /* mid-tone organic presence */
  --eden-leaf:      #3d9e47;   /* active states, success */
  --eden-glow:      #5ecf6a;   /* glow effects, highlights */
  --eden-acid:      #a8ff6e;   /* critical moments, final round accent */

  /* ── Cipher Gold (intelligence, reward, power) ── */
  --gold-tarnished: #6b4f10;   /* aged metal, inactive borders */
  --gold-burnished: #a07820;   /* warm metallic mid */
  --gold-cipher:    #e8c547;   /* PRIMARY ACCENT — tokens, glyphs, headings */
  --gold-hot:       #f5d96b;   /* hover states */
  --gold-white:     #fef3c7;   /* text on dark gold backgrounds */

  /* ── Blood Crimson (threat, attack, elimination) ── */
  --blood-deep:     #3d0808;   /* threat backgrounds */
  --blood-iron:     #7a1515;   /* danger panel borders */
  --blood-active:   #e84747;   /* PRIMARY DANGER — attacks, lives lost, alerts */
  --blood-bright:   #ff6666;   /* urgent hover states */

  /* ── Cold Steel (structure, UI chrome) ── */
  --steel-abyss:    #1c1c28;   /* deepest structural elements */
  --steel-dark:     #2e2e42;   /* panel chrome */
  --steel-mid:      #4a4a6a;   /* secondary borders */
  --steel-light:    #7a7a9a;   /* muted text, labels */
  --steel-bright:   #a8a8c8;   /* body text */
  --steel-white:    #e8e8f0;   /* primary text, headings */

  /* ── Rust / Oxidized Bronze (history, time, decay) ── */
  --rust-deep:      #2a1008;   /* rust shadow */
  --rust-mid:       #7a3515;   /* worn metal texture */
  --rust-bright:    #c47030;   /* accent on worn elements */

  /* ── Semantic Aliases ── */
  --color-bg:        var(--void-black);
  --color-surface:   var(--void-surface);
  --color-border:    var(--steel-dark);
  --color-border-active: var(--gold-cipher);
  --color-text-primary:  var(--steel-white);
  --color-text-secondary: var(--steel-light);
  --color-text-muted:    var(--steel-mid);
  --color-accent:    var(--gold-cipher);
  --color-danger:    var(--blood-active);
  --color-success:   var(--eden-leaf);
}
```

### Color Intent Map

| Context | Color | Why |
|---|---|---|
| Backgrounds | `--void-black`, `--void-surface` | Absolute depth, no distraction |
| Headings, cipher text | `--gold-cipher` | Intelligence = gold |
| Tokens | `--gold-cipher` with metallic shimmer | Minted, earned, valuable |
| Lives / health | `--blood-active` → `--eden-glow` | Biological — warm red when full, eerie green when low |
| Attack actions | `--blood-active` | Violence is red, always |
| Defense mode | `--blood-deep` background flash | Threat invades the screen |
| Correct answer | `--eden-glow` burst | Nature responds to intelligence |
| Wrong answer | `--blood-active` flash | Failure is immediate |
| Organizer controls | `--gold-cipher` + `--steel-mid` borders | Authority, not threat |
| Eliminated teams | `--steel-abyss` wash + desaturated | They are gone. They are history. |

---

## 03 · Typography System

### Typeface Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Share+Tech+Mono&family=Barlow+Condensed:wght@300;400;600;700&display=swap');

:root {
  /* Cinzel — Roman-carved majesty, for headings and cipher titles */
  --font-display: 'Cinzel', 'Trajan Pro', Georgia, serif;

  /* Share Tech Mono — military terminal, for puzzle content, codes, answers */
  --font-mono: 'Share Tech Mono', 'Courier New', monospace;

  /* Barlow Condensed — compressed military stencil, for UI labels, stats */
  --font-ui: 'Barlow Condensed', 'Impact', sans-serif;
}
```

### Type Scale

```css
/* Display — Game title, major headings, cipher names */
.text-display {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--gold-cipher);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
}

/* Heading 1 — Section titles, round labels */
.text-h1 {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--steel-white);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Heading 2 — Panel titles, team names */
.text-h2 {
  font-family: var(--font-ui);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--steel-white);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Cipher — Puzzle content, encrypted text, cipher display */
.text-cipher {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--gold-cipher);
  letter-spacing: 0.2em;
  line-height: 1.8;
}

/* Code / Answer Input */
.text-code {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--eden-glow);
  letter-spacing: 0.15em;
}

/* UI Label — Stats, token counts, lives */
.text-label {
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--steel-light);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Body — Descriptions, clues, flavor text */
.text-body {
  font-family: var(--font-ui);
  font-size: 1rem;
  font-weight: 300;
  color: var(--steel-bright);
  letter-spacing: 0.03em;
  line-height: 1.7;
}

/* Stat Number — Token count, lives, timer */
.text-stat {
  font-family: var(--font-mono);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--gold-cipher);
  letter-spacing: -0.02em;
  line-height: 1;
}
```

### Typography Rules

- **Never** use sentence case for headings. Everything in headers is `UPPERCASE` — this is a command structure, not a conversation.
- Cipher puzzle text is always `font-mono` + `--gold-cipher`. It must look engraved.
- Defense mode uses `--blood-active` for all heading text — the color itself communicates emergency.
- Eliminated team names are rendered in `--steel-mid` with `text-decoration: line-through` — they are erased.

---

## 04 · Surface & Texture System

### The Four Surface Types

```css
/* ─────────────────────────────────────────────
   SURFACE 1: Void Panel (base layer)
   Used for: Main game backgrounds, page base
   ───────────────────────────────────────────── */
.surface-void {
  background-color: var(--void-black);
  background-image:
    /* Subtle scanline grid — feels like a military terminal */
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.012) 2px,
      rgba(255,255,255,0.012) 4px
    ),
    /* Vertical column lines — graph paper of the void */
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 40px,
      rgba(255,255,255,0.008) 40px,
      rgba(255,255,255,0.008) 41px
    );
}

/* ─────────────────────────────────────────────
   SURFACE 2: Iron Panel (primary container)
   Used for: Puzzle cards, team panels, stats
   ───────────────────────────────────────────── */
.surface-iron {
  background-color: var(--void-surface);
  border: 1px solid var(--steel-dark);
  border-top: 1px solid var(--steel-mid);  /* slightly lighter top = caught light */
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.04),  /* inner light hit */
    inset 0 -1px 0 rgba(0,0,0,0.4),        /* inner shadow depth */
    0 4px 24px rgba(0,0,0,0.6);             /* outer depth */
  position: relative;
}

/* Corner accents — engraved corner marks (like a targeting reticle) */
.surface-iron::before,
.surface-iron::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--gold-tarnished);
  border-style: solid;
  opacity: 0.6;
}
.surface-iron::before {
  top: -1px; left: -1px;
  border-width: 2px 0 0 2px;
}
.surface-iron::after {
  bottom: -1px; right: -1px;
  border-width: 0 2px 2px 0;
}

/* ─────────────────────────────────────────────
   SURFACE 3: Cipher Panel (puzzle display)
   Used for: Active puzzle containers
   ───────────────────────────────────────────── */
.surface-cipher {
  background-color: var(--void-deep);
  border: 1px solid var(--gold-tarnished);
  box-shadow:
    inset 0 0 40px rgba(232, 197, 71, 0.04),  /* gold inner warmth */
    0 0 0 4px rgba(232, 197, 71, 0.06),        /* gold glow ring */
    0 8px 32px rgba(0,0,0,0.8);
  position: relative;
  overflow: hidden;
}

/* Gold shimmer line at top — like light reflecting off engraving */
.surface-cipher::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold-cipher) 30%,
    var(--gold-hot) 50%,
    var(--gold-cipher) 70%,
    transparent 100%
  );
  opacity: 0.7;
}

/* ─────────────────────────────────────────────
   SURFACE 4: Threat Panel (defense / danger)
   Used for: Attack incoming overlay, danger states
   ───────────────────────────────────────────── */
.surface-threat {
  background-color: var(--blood-deep);
  border: 1px solid var(--blood-iron);
  box-shadow:
    inset 0 0 60px rgba(232, 71, 71, 0.08),
    0 0 0 1px var(--blood-active),
    0 0 40px rgba(232, 71, 71, 0.2);
  animation: threat-pulse 2s ease-in-out infinite;
}

@keyframes threat-pulse {
  0%, 100% { box-shadow: inset 0 0 60px rgba(232,71,71,0.08), 0 0 0 1px var(--blood-active), 0 0 40px rgba(232,71,71,0.2); }
  50%       { box-shadow: inset 0 0 60px rgba(232,71,71,0.15), 0 0 0 1px var(--blood-bright), 0 0 60px rgba(232,71,71,0.35); }
}
```

---

## 05 · Component Library

### 5.1 · Buttons

```css
/* ── PRIMARY: Execute action (submit, launch attack) ── */
.btn-primary {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--void-black);
  background: var(--gold-cipher);
  border: none;
  padding: 12px 32px;
  cursor: pointer;
  position: relative;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  /* Chamfered corners — industrial, not rounded */
  transition: background 0.15s, transform 0.1s;
}

.btn-primary:hover  { background: var(--gold-hot); transform: translateY(-1px); }
.btn-primary:active { background: var(--gold-burnished); transform: translateY(0); }

/* ── DANGER: Attack / eliminate ── */
.btn-danger {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--steel-white);
  background: transparent;
  border: 1px solid var(--blood-active);
  padding: 12px 32px;
  cursor: pointer;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
}

.btn-danger:hover {
  background: var(--blood-iron);
  box-shadow: 0 0 16px rgba(232,71,71,0.3);
  transform: translateY(-1px);
}

/* ── GHOST: Secondary action (safe zone, gamble) ── */
.btn-ghost {
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--steel-light);
  background: transparent;
  border: 1px solid var(--steel-dark);
  padding: 10px 24px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}

.btn-ghost:hover {
  border-color: var(--steel-mid);
  color: var(--steel-white);
}

/* ── DISABLED / SPENT ── */
.btn-disabled {
  opacity: 0.3;
  cursor: not-allowed;
  filter: grayscale(1);
  pointer-events: none;
}
```

### 5.2 · Token Display

```css
/* Token count — the most important number on screen */
.token-display {
  display: flex;
  align-items: center;
  gap: 10px;
}

.token-icon {
  width: 28px;
  height: 28px;
  position: relative;
}
/* Token coin — hexagonal, gold */
.token-icon svg {
  width: 100%;
  height: 100%;
  /* Use inline SVG: a hexagon with gold fill */
}

.token-count {
  font-family: var(--font-mono);
  font-size: 2rem;
  color: var(--gold-cipher);
  line-height: 1;
  text-shadow: 0 0 12px rgba(232,197,71,0.4);
  transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
}

/* Animate on token gain */
.token-count.gaining {
  animation: token-gain 0.5s cubic-bezier(0.34,1.56,0.64,1);
  color: var(--gold-hot);
}

/* Animate on token spend */
.token-count.spending {
  animation: token-spend 0.3s ease-out;
  color: var(--rust-bright);
}

@keyframes token-gain {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.3); }
  100% { transform: scale(1); }
}

@keyframes token-spend {
  0%   { transform: scale(1); }
  30%  { transform: scale(0.85); }
  100% { transform: scale(1); }
}

.token-label {
  font-family: var(--font-ui);
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: var(--steel-light);
  text-transform: uppercase;
  margin-top: 2px;
}
```

### 5.3 · Lives Meter

```css
/*
  Lives are NOT hearts or stars.
  They are CAPSULES — biological, pill-shaped.
  Full = eden-glow green (alive, warm)
  Empty = void-black with ghost border (gone)
  This creates biological tension: the green ones feel alive.
*/

.lives-meter {
  display: flex;
  gap: 6px;
  align-items: center;
}

.life-capsule {
  width: 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid var(--eden-vine);
  background: linear-gradient(
    180deg,
    var(--eden-acid) 0%,
    var(--eden-glow) 40%,
    var(--eden-leaf) 100%
  );
  box-shadow:
    0 0 6px rgba(94,207,106,0.5),
    inset 0 1px 0 rgba(255,255,255,0.3);
  transition: all 0.4s ease;
  position: relative;
}

/* Empty life */
.life-capsule.empty {
  background: var(--void-surface);
  border-color: var(--steel-dark);
  box-shadow: none;
}

/* Critical — last life — pulsing red */
.life-capsule.critical {
  background: linear-gradient(180deg, var(--blood-bright) 0%, var(--blood-active) 100%);
  border-color: var(--blood-active);
  box-shadow: 0 0 8px rgba(232,71,71,0.6);
  animation: life-critical 1.2s ease-in-out infinite;
}

@keyframes life-critical {
  0%, 100% { box-shadow: 0 0 8px rgba(232,71,71,0.6); }
  50%       { box-shadow: 0 0 16px rgba(232,71,71,0.9); }
}

/* Life lost animation */
.life-capsule.losing {
  animation: life-lost 0.6s ease-out forwards;
}

@keyframes life-lost {
  0%   { transform: scaleY(1); opacity: 1; background: var(--blood-bright); }
  40%  { transform: scaleY(1.3); opacity: 0.8; }
  100% { transform: scaleY(0); opacity: 0; }
}
```

### 5.4 · Puzzle Display Panel

```css
/*
  The puzzle panel is the ALTAR of this game.
  It must feel ancient, important, and slightly dangerous.
  Cipher text is carved. The panel breathes.
*/

.puzzle-panel {
  /* Surface cipher styles applied */
  padding: 40px;
  position: relative;
}

/* Cipher type tag — top left corner */
.cipher-type-badge {
  position: absolute;
  top: -1px;
  left: 24px;
  font-family: var(--font-ui);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--void-black);
  background: var(--gold-cipher);
  padding: 4px 12px;
  clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 100%, 6px 100%);
}

/* Puzzle title */
.puzzle-title {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--steel-light);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

/* The cipher text itself */
.cipher-text {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--gold-cipher);
  letter-spacing: 0.25em;
  line-height: 2;
  word-break: break-all;
  text-shadow: 0 0 8px rgba(232,197,71,0.3);
  /* Slight glow = luminescent inscription */
}

/* Flavor text / narrative clue beneath cipher */
.puzzle-narrative {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--steel-light);
  font-style: italic;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--steel-dark);
  letter-spacing: 0.04em;
  line-height: 1.7;
}

/* Answer input */
.answer-input {
  width: 100%;
  background: var(--void-black);
  border: 1px solid var(--steel-dark);
  border-bottom: 2px solid var(--gold-tarnished);
  color: var(--eden-glow);
  font-family: var(--font-mono);
  font-size: 1.25rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 14px 20px;
  outline: none;
  margin-top: 32px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.answer-input::placeholder {
  color: var(--steel-mid);
  letter-spacing: 0.1em;
}

.answer-input:focus {
  border-color: var(--gold-cipher);
  border-bottom-color: var(--gold-cipher);
  box-shadow: 0 4px 16px rgba(232,197,71,0.12);
}

/* Correct answer state */
.answer-input.correct {
  border-color: var(--eden-glow);
  color: var(--eden-acid);
  box-shadow: 0 0 20px rgba(94,207,106,0.25);
  animation: correct-flash 0.5s ease-out;
}

/* Wrong answer state */
.answer-input.wrong {
  border-color: var(--blood-active);
  color: var(--blood-active);
  animation: wrong-shake 0.4s ease-out;
}

@keyframes correct-flash {
  0%   { background: rgba(94,207,106,0.15); }
  100% { background: var(--void-black); }
}

@keyframes wrong-shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-8px); }
  40%       { transform: translateX(8px); }
  60%       { transform: translateX(-6px); }
  80%       { transform: translateX(6px); }
}
```

### 5.5 · Attack Panel

```css
/*
  Attacking feels like pressing a weapon's trigger.
  The target selector is a targeting interface.
  Red. Decisive. No second-guessing.
*/

.attack-panel {
  /* surface-iron applied */
  padding: 24px;
}

.attack-panel-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--blood-iron);
}

.attack-panel-title {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--blood-active);
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

/* Cost indicator */
.attack-cost {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--gold-cipher);
}

.attack-cost::before {
  content: 'COST:';
  font-family: var(--font-ui);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--steel-light);
}

/* Target team rows */
.target-team-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid var(--steel-dark);
  margin-bottom: 8px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  position: relative;
}

.target-team-row:hover {
  border-color: var(--blood-active);
  background: rgba(232,71,71,0.06);
}

/* Team token count (shows their vulnerability) */
.target-token-count {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--gold-cipher);
}

.target-lives-display {
  display: flex;
  gap: 4px;
}

/* Select / confirm attack */
.target-team-row.selected {
  border-color: var(--blood-active);
  background: rgba(232,71,71,0.1);
}

.target-team-row.selected::after {
  content: '▶ LOCKED';
  position: absolute;
  right: 16px;
  font-family: var(--font-ui);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--blood-active);
}

/* Eliminated team — greyed, unclikable */
.target-team-row.eliminated {
  opacity: 0.25;
  pointer-events: none;
  text-decoration: line-through;
}
```

### 5.6 · Defense Overlay

```css
/*
  When a team is attacked, the ENTIRE screen becomes
  the defense. This is an interruption. A seizure.
  The UI invades. 3D transforms. Blood red wash.
*/

.defense-overlay {
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 16, 0.97);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: defense-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Red flash on entry */
@keyframes defense-enter {
  0%   { background: rgba(232,71,71,0.4); transform: scale(1.02); }
  100% { background: rgba(8,8,16,0.97); transform: scale(1); }
}

/* Attackers name badge — WHO DID THIS */
.attacker-badge {
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 0.4em;
  color: var(--blood-active);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.defense-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  color: var(--blood-active);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(232,71,71,0.5);
  margin-bottom: 32px;
  text-align: center;
}

/* Countdown timer — the most stressful element */
.defense-timer {
  font-family: var(--font-mono);
  font-size: clamp(4rem, 12vw, 8rem);
  color: var(--steel-white);
  line-height: 1;
  margin-bottom: 48px;
  transition: color 0.5s;
}

/* Timer turns red in final 20 seconds */
.defense-timer.critical {
  color: var(--blood-active);
  text-shadow: 0 0 30px rgba(232,71,71,0.6);
  animation: timer-critical 0.5s ease-in-out infinite;
}

@keyframes timer-critical {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.7; }
}

/* Timer bar — horizontal drain underneath */
.defense-timer-bar-track {
  width: min(480px, 90vw);
  height: 4px;
  background: var(--steel-dark);
  margin-bottom: 48px;
  position: relative;
}

.defense-timer-bar-fill {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  background: var(--blood-active);
  transition: width 1s linear, background 0.5s;
  /* width is set dynamically via JS */
}

.defense-timer-bar-fill.critical {
  background: var(--blood-bright);
  box-shadow: 0 0 8px var(--blood-active);
}

/* The defense puzzle inside the overlay */
.defense-puzzle-container {
  width: min(560px, 90vw);
}
```

### 5.7 · Live Leaderboard

```css
/*
  The leaderboard is on screen at all times during the game.
  It is a ranked kill list. Cold. Factual. Ruthless.
*/

.leaderboard {
  /* surface-iron applied */
  padding: 0;
  overflow: hidden;
}

.leaderboard-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--steel-dark);
  display: flex;
  align-items: center;
  gap: 8px;
}

.leaderboard-title {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gold-cipher);
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

/* Individual team row */
.lb-row {
  display: grid;
  grid-template-columns: 28px 1fr auto auto;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--steel-abyss);
  transition: background 0.3s;
  position: relative;
}

/* Highlight your own team */
.lb-row.own-team {
  background: rgba(232,197,71,0.04);
  border-left: 2px solid var(--gold-cipher);
}

.lb-rank {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--steel-mid);
  text-align: center;
}

/* Rank 1 is gold */
.lb-row:nth-child(1) .lb-rank { color: var(--gold-cipher); }

.lb-team-name {
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--steel-white);
  text-transform: uppercase;
}

/* Eliminated team */
.lb-row.eliminated .lb-team-name {
  color: var(--steel-mid);
  text-decoration: line-through;
}

.lb-tokens {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--gold-cipher);
  text-align: right;
}

.lb-lives {
  display: flex;
  gap: 3px;
}

/* Token change animation */
.lb-tokens.changed {
  animation: lb-change 0.6s ease-out;
}

@keyframes lb-change {
  0%   { transform: scale(1); }
  30%  { transform: scale(1.25); color: var(--gold-hot); }
  100% { transform: scale(1); }
}

/* Row re-order transition */
.lb-row {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s;
}
```

### 5.8 · Round Header Bar

```css
/*
  The round bar spans the top of every screen.
  It is a command readout — military, minimal.
  Round number. Phase. Clock.
*/

.round-bar {
  width: 100%;
  height: 56px;
  background: var(--void-deep);
  border-bottom: 1px solid var(--steel-dark);
  display: flex;
  align-items: center;
  padding: 0 32px;
  gap: 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Left: OPERATION PROMETHEUS wordmark */
.round-bar-wordmark {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 900;
  color: var(--gold-cipher);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-right: 40px;
}

/* Divider */
.round-bar-divider {
  width: 1px;
  height: 24px;
  background: var(--steel-dark);
  margin: 0 24px;
}

/* Round indicator */
.round-bar-round {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.round-bar-label {
  font-family: var(--font-ui);
  font-size: 0.55rem;
  letter-spacing: 0.3em;
  color: var(--steel-mid);
  text-transform: uppercase;
}

.round-bar-number {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--steel-white);
  line-height: 1;
}

/* Phase badge */
.round-bar-phase {
  margin-left: auto;
  font-family: var(--font-ui);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 5px 14px;
  border: 1px solid currentColor;
}

.phase-badge-active   { color: var(--eden-glow); border-color: var(--eden-vine); }
.phase-badge-safezone { color: var(--gold-cipher); border-color: var(--gold-tarnished); }
.phase-badge-sudden   { color: var(--blood-active); border-color: var(--blood-iron);
                        animation: phase-urgent 0.8s ease-in-out infinite; }

@keyframes phase-urgent {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
```

---

## 06 · Layout Architecture

### Grid System

```css
/* ── Main Game Layout (three-column) ── */
.game-layout {
  display: grid;
  grid-template-columns: 280px 1fr 260px;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header  header     header"
    "sidebar main       leaderboard";
  height: 100dvh;
  overflow: hidden;
  background: var(--void-black);
}

/* ── Mobile: Single column stacked ── */
@media (max-width: 768px) {
  .game-layout {
    grid-template-columns: 1fr;
    grid-template-rows: 56px auto 1fr auto;
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "leaderboard";
    overflow-y: auto;
  }
}

/* ── Defense overlay breaks the grid entirely ── */
/* (uses fixed positioning — see 5.6) */

/* ── Organizer layout (two-column) ── */
.organizer-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header  header"
    "main    controls";
  height: 100dvh;
}
```

### Spacing Scale

```css
:root {
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
}
```

---

## 07 · Iconography & Decorative Language

### Geometric Icon System

Do not use emoji or icon fonts. All icons are **inline SVG shapes** — simple, constructed from basic geometry. They carry the industrial-constructed aesthetic.

```
TOKEN:      Hexagon (6-sided minted coin)
LIFE:       Tall pill / capsule (biological)
ATTACK:     Chevron pointing right (directional force)
DEFENSE:    Upward-pointing shield fragment (hexagon half)
SAFE ZONE:  Circle with inner dot (targeting crosshair at peace)
CIPHER:     Equals sign rotated 45° (≡ encoded)
ELIMINATED: X made from two 2px lines (erasure)
ROUND:      Roman numeral style block number
ORGANIZER:  Eye outline (all-seeing)
```

### Corner Glyphs

Every panel has chamfered or notched corners using CSS `clip-path`. This is the signature of the aesthetic — everything is machined, not rounded.

```css
/* Standard chamfer (8px cut) */
clip-path: polygon(
  8px 0%, calc(100% - 8px) 0%,
  100% 8px, 100% calc(100% - 8px),
  calc(100% - 8px) 100%, 8px 100%,
  0% calc(100% - 8px), 0% 8px
);

/* Aggressive chamfer (16px cut) — for major elements */
clip-path: polygon(
  16px 0%, calc(100% - 16px) 0%,
  100% 16px, 100% calc(100% - 16px),
  calc(100% - 16px) 100%, 16px 100%,
  0% calc(100% - 16px), 0% 16px
);

/* Single cut — top right only (directional) */
clip-path: polygon(
  0% 0%, calc(100% - 16px) 0%,
  100% 16px, 100% 100%, 0% 100%
);
```

### Separator Lines

```css
/* Gold separator — section divider */
.sep-gold {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold-tarnished) 20%,
    var(--gold-cipher) 50%,
    var(--gold-tarnished) 80%,
    transparent 100%
  );
  margin: 24px 0;
}

/* Steel separator — minor divider */
.sep-steel {
  height: 1px;
  background: var(--steel-dark);
  margin: 16px 0;
}
```

---

## 08 · Animation & Motion Language

### Principles

- **Everything that matters has an entrance.** Panels don't appear — they materialize: fade + slight translate + scale.
- **Numbers change, they don't teleport.** Token counts animate with spring physics.
- **Danger is physical.** Screen shake, color invasion, overlay ambush.
- **Elimination is final.** The eliminated team's panel does not fade gently. It cuts to static, then resolves to a grey monument.

```css
/* ── Standard panel entrance ── */
@keyframes panel-enter {
  from { opacity: 0; transform: translateY(6px) scale(0.99); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-enter { animation: panel-enter 0.3s cubic-bezier(0.16,1,0.3,1) forwards; }

/* ── Gold reveal — correct answer ── */
@keyframes gold-reveal {
  0%   { clip-path: inset(0 100% 0 0); opacity: 0; }
  100% { clip-path: inset(0 0% 0 0);   opacity: 1; }
}
.animate-reveal { animation: gold-reveal 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }

/* ── Screen shake — attack received ── */
@keyframes screen-shake {
  0%, 100% { transform: translate(0,0); }
  10%       { transform: translate(-8px, 4px); }
  20%       { transform: translate(8px, -4px); }
  30%       { transform: translate(-6px, 6px); }
  40%       { transform: translate(6px, -6px); }
  50%       { transform: translate(-4px, 4px); }
  60%       { transform: translate(4px, -2px); }
  70%       { transform: translate(-2px, 2px); }
}
.animate-shake { animation: screen-shake 0.5s ease-out; }

/* ── Elimination — grey static dissolve ── */
@keyframes elimination {
  0%   { filter: grayscale(0); opacity: 1; }
  20%  { filter: grayscale(0.8); opacity: 0.6; }
  40%  { filter: grayscale(1) contrast(2); opacity: 0.4; }
  60%  { filter: grayscale(1) contrast(1); opacity: 0.3; }
  100% { filter: grayscale(1); opacity: 0.2; }
}
.animate-eliminate { animation: elimination 1.2s ease-out forwards; }

/* ── Safe zone activation — gold border bloom ── */
@keyframes safezone-bloom {
  0%   { box-shadow: 0 0 0 0 rgba(232,197,71,0); }
  50%  { box-shadow: 0 0 0 12px rgba(232,197,71,0.3); }
  100% { box-shadow: 0 0 0 4px rgba(232,197,71,0.15); }
}
.animate-safezone { animation: safezone-bloom 0.8s ease-out forwards; }

/* ── Final round sudden death — red pulse on body ── */
@keyframes sudden-death {
  0%, 100% { background-color: var(--void-black); }
  50%       { background-color: rgba(61,8,8,0.6); }
}
.sudden-death-mode { animation: sudden-death 3s ease-in-out infinite; }
```

---

## 09 · Game Phase Visual States

### Phase Map

| Phase | Background | Border accent | Text accent | Special effects |
|---|---|---|---|---|
| **Lobby** | `--void-black` | `--steel-dark` | `--steel-bright` | None |
| **Active — early** | `--void-black` | `--steel-dark` | `--gold-cipher` | Subtle scanlines |
| **Active — mid** | `--void-black` | `--gold-tarnished` | `--gold-cipher` | Increased glow on tokens |
| **Active — late** | `--void-black` | `--blood-iron` | `--blood-active` | Corner accents pulse red |
| **Safe zone** | `--void-black` | `--gold-cipher` | `--gold-cipher` | Gold border bloom |
| **Under attack** | `--blood-deep` | `--blood-active` | `--blood-bright` | Screen shake + pulsing |
| **Sudden death** | `--void-black` + red pulse | `--blood-active` | `--blood-active` | Slow body bleed |
| **Eliminated** | `--void-black` | `--steel-abyss` | `--steel-mid` | Full greyscale filter |
| **Victory** | `--void-black` | `--gold-cipher` | `--gold-cipher` | Gold particle burst (JS) |

---

## 10 · Cipher-Specific Visual Treatments

Each cipher type has a distinct visual personality:

### Acrostic
```css
/* First letter of each line highlighted — the pattern reveals itself */
.cipher-acrostic .cipher-line::first-letter {
  color: var(--gold-hot);
  font-size: 1.5em;
  font-weight: 600;
  text-shadow: 0 0 12px rgba(245,217,107,0.5);
}
```

### Caesar Cipher
```css
/* Slightly offset ghost text behind — the shifted nature */
.cipher-caesar {
  position: relative;
}
.cipher-caesar::before {
  content: attr(data-original);
  position: absolute;
  inset: 0;
  color: var(--steel-dark);
  letter-spacing: 0.25em;
  pointer-events: none;
  transform: translateX(2px);
  font-family: var(--font-mono);
}
```

### Binary
```css
/* Binary text — tiny, dense, machine-code feel */
.cipher-binary {
  font-size: 0.875rem;
  line-height: 2.2;
  letter-spacing: 0.3em;
  color: var(--eden-glow);  /* Binary = green, like a terminal */
  text-shadow: 0 0 4px rgba(94,207,106,0.3);
}
```

### Numeric Code
```css
/* Large numbers — structured, spaced */
.cipher-numeric {
  font-size: 1.75rem;
  letter-spacing: 0.5em;
  color: var(--gold-cipher);
}
```

### Sentinel Pattern
```css
/* Grid display — pattern recognition */
.cipher-sentinel {
  display: grid;
  grid-template-columns: repeat(auto-fill, 28px);
  gap: 6px;
  font-size: 0.875rem;
  letter-spacing: 0;
}
.cipher-sentinel span {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--steel-dark);
  color: var(--steel-bright);
  font-family: var(--font-mono);
}
.cipher-sentinel span.sentinel {
  color: var(--gold-cipher);
  border-color: var(--gold-tarnished);
  background: rgba(232,197,71,0.06);
}
```

---

## 11 · Organizer Dashboard Specifics

The organizer view uses the same design language but shifts palette toward **authority, not urgency**. Gold commands. Red is reserved for irreversible actions.

```css
/* Organizer-only elements */
.organizer-control-panel {
  /* surface-iron */
  padding: 24px;
  border-left: 2px solid var(--gold-tarnished);
}

.organizer-action-btn {
  /* btn-ghost base, but with gold accent on hover */
}
.organizer-action-btn:hover {
  border-color: var(--gold-cipher);
  color: var(--gold-cipher);
}

/* Irreversible actions (eliminate team, force advance) */
.organizer-danger-btn {
  /* btn-danger base */
  /* Requires a confirmation hold — 2 second press to activate */
}

.organizer-danger-btn.holding {
  animation: hold-confirm 2s linear forwards;
}

@keyframes hold-confirm {
  0%   { background: transparent; }
  100% { background: var(--blood-iron); border-color: var(--blood-active); }
}
```

---

## 12 · CSS Variable Quick Reference

```css
/* Paste into :root { } — complete Eden Metal token set */

--void-black: #080810;    --void-deep: #0d0d1a;       --void-surface: #12121f;
--void-raised: #1a1a2e;   --eden-root: #0a1a0d;        --eden-moss: #1b3a1f;
--eden-vine: #2d6b35;     --eden-leaf: #3d9e47;        --eden-glow: #5ecf6a;
--eden-acid: #a8ff6e;     --gold-tarnished: #6b4f10;   --gold-burnished: #a07820;
--gold-cipher: #e8c547;   --gold-hot: #f5d96b;         --gold-white: #fef3c7;
--blood-deep: #3d0808;    --blood-iron: #7a1515;        --blood-active: #e84747;
--blood-bright: #ff6666;  --steel-abyss: #1c1c28;      --steel-dark: #2e2e42;
--steel-mid: #4a4a6a;     --steel-light: #7a7a9a;      --steel-bright: #a8a8c8;
--steel-white: #e8e8f0;   --rust-deep: #2a1008;        --rust-mid: #7a3515;
--rust-bright: #c47030;

--font-display: 'Cinzel', Georgia, serif;
--font-mono:    'Share Tech Mono', monospace;
--font-ui:      'Barlow Condensed', sans-serif;

--space-xs: 4px;  --space-sm: 8px;   --space-md: 16px;
--space-lg: 24px; --space-xl: 40px;  --space-2xl: 64px;
```

---

## 13 · Do & Do Not

### DO
- Use `clip-path` chamfers on all interactive elements — nothing is perfectly rounded
- Let cipher text breathe with wide `letter-spacing` — it is being deciphered, not read
- Make the leaderboard visible at all times — the hierarchy must be felt constantly
- Animate numbers with spring physics, not linear transitions
- Use `--eden-glow` green only for success and biological life — keep it rare and meaningful
- Design every state: lobby → active → under attack → eliminated → victory

### DO NOT
- Use `border-radius` greater than `4px` on anything except pills
- Use white backgrounds anywhere — the void is sacred
- Use any web-safe font (Arial, Georgia system, etc.)
- Use emojis for any game-critical communication
- Animate everything — motion is reserved for events that *matter*
- Show the answer on the client — ever

---

*Eden Metal was designed for Operation Prometheus. It should feel like the game earned it.*
