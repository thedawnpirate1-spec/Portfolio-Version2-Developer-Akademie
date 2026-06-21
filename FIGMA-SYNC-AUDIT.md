# Figma 1:1 Sync — Audit (portfolio-v2)

**Quelle:** Figma `evjDQX22JNHFTLiAKgDuMt` ("Portfolio-Designs (Kopie) (Kopie)")
**Desktop-Frame:** `04_Version 2 - Desktop` = node **230:457** (1440 × 6587)
**Mobile-Frame:** `05_Version 2 - Mobile` = node **304:694** (390 × 7786)
**Projekt-Stack:** Angular 22 + TypeScript + SCSS (kein Tailwind/Next.js — bestehender Stack bleibt).

Alle Werte unten wurden via **Figma Dev Mode MCP** gezogen (`get_metadata`, `get_design_context`,
`get_variable_defs`) bzw. durch Pixel-Sampling des gerenderten Frame-PNG bestätigt.

---

## A. Bestätigte Design-Tokens (aus `get_variable_defs` 230:457)

| Token | Wert | Status im Code |
|---|---|---|
| Style 2 blue | `#5988FF` | ✅ `$color-primary` |
| Purple 2 | `#797EF3` | vorhanden `$color-purple` |
| Purple light (V1) | `#1E0A7D` | `$color-purple-deep` |
| s2 shadow | `drop-shadow 5px 5px 15px #00000026` (15 %) | ✅ Karten/Buttons |
| Growth-mindset shadow | `0 4px 9px #00000073` (45 %) | ✅ `--badge` |
| Fonts | Baloo (Display), Montserrat (Body), Poppins (UI) | ✅ self-hosted |

### Hero-Typografie (aus `get_design_context` 105209:1738) — exakte Werte
- „Hello! I am Sofia": **Montserrat Regular, 64 px**, `#5988FF`
- „FRONTEND": **Baloo, 128 px**, letter-spacing **-3.2px** (≈ -0.025em), `#5988FF`
- „DEVELOPER": **Baloo, 118 px**, letter-spacing **-2.36px**, `#5988FF`
- „SCROLL": **Montserrat Medium, 23 px**, `#5988FF`; vertikale Linie 330 px
- Photo 761 × 917 @ left 32 / top 106 (unten verankert); Social-Icons 40 px, gap 25 px, vertikal rechts

---

## B. Dekorative Kreise — VOLLSTÄNDIGE Liste (Desktop, Fokus des Goals)

Alle Kreise sind **solide `#5988FF`** (Pixel-Sampling bestätigt `(89,135,255)`), **kein Blur, kein Gradient**.
Position als % der Frame-Breite 1440 (x, ⌀) bzw. relativ zur Sektion (top). „Hinter Content" = niedriger z-index.
E5 liest minimal heller (`#6B94FF`) — als leichtes Tint umsetzbar.

| # | Figma-Node | Sektion | x (abs) | y (abs) | ⌀ px | ⌀ % v. 1440 | Lage / Hinweis |
|---|---|---|---|---|---|---|---|
| E3 | 257:644 | Hero | -199 | -71 | 892 | 61.9 % | groß, oben-links, hinter Foto |
| E5 | 278:653 | Hero↘About | 628 | 921 | 206 | 14.3 % | Seam Hero/About, leicht heller |
| E6 | 278:654 | About | 1034 | 1056 | 82 | 5.7 % | klein, rechts |
| E7 | 291:729 | Work (top) | 540 | 2395 | 109 | 7.6 % | über „My work"-Titel links |
| E8 | 291:732 | Work (top) | 1134 | 2515 | 183 | 12.7 % | rechts oben |
| E4 | 257:646 | Work/Projects | 143 | 2878 | 447 | 31.0 % | groß, hinter 1. Projektkarte |
| E9 | 295:794 | Work/Projects | 1537 | 3163 | 741 | 51.4 % | sehr groß, rechts, läuft aus dem Rand |
| E10 | 297:795 | Work/Projects | 77 | 3611 | 51 | 3.5 % | klein, linker Rand |
| E11p | 300:636 | Work/Projects | 343 | 4052 | 270 | 18.8 % | mittig-links |
| E12 | 300:637 | Work/Projects | 1278 | 4443 | 98 | 6.8 % | rechts unten |
| E13 | 300:638 | Refs↘Contact | 930 | 5390 | 148 | 10.3 % | Seam References/Contact |
| E11c | 300:689 | Contact | 242 | 5905 | 204 | 14.2 % | links |
| E14 | 300:690 | Contact | 1276 | 6156 | 73 | 5.1 % | klein, rechts unten |

**Sektions-Y-Bereiche (Desktop, zur Lokalisierung der `top`-Werte):**
Header 0–117 · Hero 0–1024 · About 1163–1570 · Skills 1697–2329 ·
Work/Projects 2469–4686 · References 4826–5358 · Contact 5498–6298 · Footer 6298–6587.

> Hinweis: Skills-Band, References-Band, Contact-Hintergrund sind im Figma als **gefüllte Image-/Frame-Hintergründe** (Verlauf `#5988FF→#0043F0`) umgesetzt — im Code bereits als `$gradient-blue` vorhanden. Die großen Hero-/Projekt-Kreise sind im Figma teils ins `hero bg`-Image gebacken; laut Goal („% statt px, responsive") werden sie als **positionierte CSS-Kreise** nachgebaut, nicht als Raster-Backgrounds importiert.

---

## C. Ist-Zustand Code (Kreise)

| Sektion | Im Code vorhanden | Soll (Figma) | Gap |
|---|---|---|---|
| Hero | 1 × `hero__circle` (radial-**gradient**, oben-links) | E3 solid #5988FF | Farbe falsch (Gradient→solid); + E5 fehlt |
| About | 2 × `about__deco-circle` (--top, --right) | E6 (+ E5) | Positionen/Größe gegen Figma prüfen |
| Skills | – | (nur Verlaufsband) | ok (keine Kreise) |
| Work | – | E7,E8,E4,E9,E10,E11p,E12 (7 Stück) | **alle 7 fehlen** |
| References | – | E13 (Seam) | fehlt |
| Contact | – | E11c, E14 (+ E13) | **fehlen** |
| Footer | – | – | ok |

**Summe:** Code 3 Kreise · Figma 13 Kreise · **10 fehlen / 1 falsche Farbe.**

---

## D. Umsetzungs-Strategie (Phase 2/3)

1. **Wiederverwendbares Kreis-Primitive**: eine `.deco-circle`-Klasse (global in `styles.scss`)
   — `position:absolute; border-radius:50%; background:$color-primary; z-index:0;` + `aria-hidden`.
   Jede Sektion bekommt `position:relative; overflow:hidden` (clipping wie im Figma-Frame).
2. **Positionen** je Kreis als `top/left` in **%** der Sektion und ⌀ in **vw/%** (responsive),
   abgeleitet aus Spalte B (x/1440, top relativ zur Sektionshöhe).
3. **z-index/Layer**: Kreise hinter Content (Karten, Text, Fotos liegen mit z-index ≥ 1 davor) — exakt wie Figma-Layerreihenfolge (Ellipsen liegen unter den Section-Frames).
4. **Mobile** (Frame 304:694): eigene Kreis-Instanzen + Positionen separat ziehen (nicht linear skalieren).

---

## E. Offene Punkte / Annahmen
- Kreise sind solide `#5988FF` ohne Blur (Pixel-Sampling). E5 leicht heller → als `$color-primary-light` Tint.
- Große Kreise (E4/E9) liegen teils hinter weißen Projektkarten → erscheinen nur als blaue „Bögen" am Kartenrand. Das ist gewolltes Verhalten (Layer-Reihenfolge), kein fehlender Kreis.
- Stack bleibt Angular/SCSS (Goal-Text nannte irrtümlich Next.js/Tailwind; Leitplanke „nicht umbauen" hat Vorrang).

---

## F. Changelog — was umgesetzt wurde (2026-06-19)

**Kreis-System (Phase 2/3):**
- Globales `.deco-circle`-Primitive (`styles.scss`): solid `#5988FF`, `aspect-ratio:1`,
  `z-index:0`; `.container` global `z-index:1` (Content über Kreisen).
- Hero `hero__circle`: Radial-**Gradient → solid `#5988FF`**; Position auf Figma **E3**
  korrigiert (Desktop 61.94vw @ -13.82/-4.93vw; Mobile 156.9vw @ -58.5/-5.6vw).
- About: E5 (`--top`, light) + E6 (`--right`) auf Figma-Koordinaten; **nur Desktop**
  (Mobile-About-Frame hat keine Ellipsen).
- Work: **6 Kreise** (E7,E8,E4,E10,E11p,E12) ergänzt; mobile-first mit Mobile-Frame-
  Koordinaten (E4,E11,E12 sichtbar; E7/E8/E10 nur Desktop). E9 weggelassen (off-frame).
- Contact: **3 Kreise** (E13 Seam, E11c, E14); mobile zeigt nur E14 (E13/E11 lägen auf
  dem Verlaufsband). Hero-**Mobile-Bubbles** E5/E6 (304:975/976) ergänzt (nur Mobile).
- Ergebnis: **3 → 13 Kreise** (12 Desktop sichtbar + Hero-Bubbles Mobile), alle hinter
  dem Content, **0 horizontaler Overflow** auf 375 / 768 / 1280 / 1440 (DOM-verifiziert).

**Typografie (Phase 1/4):**
- Hero-Titel Desktop: 96px → **128px** (Figma „FRONTEND"), letter-spacing **-0.025em**.
- Hero-Greeting Desktop: 46px → **64px** (Figma) via clamp-Koeffizient 4.44vw.

**Vorab-Fix (separat):** `@angular/compiler-cli` 15.0.4 → 22.0.1 (Build war kaputt);
lokale Google-Fonts-Verlinkung im `dist` repariert; Skills mobil 3/Reihe; Scroll-Indikator.

**Verifikation:** `npm run build` grün; alle Maße via `preview_eval`-DOM-Messung geprüft
(Pixel-Screenshot-Diff blockiert — siehe Abschnitt G).

## F.2 Phase 5 — Metrik-QA (DOM gemessen vs. Figma via MCP)

Statt Pixel-Diff: gerenderte Werte (1440er Viewport) gegen exakte Figma-Werte.

| Element | Figma (MCP) | Code vorher | Code jetzt | Status |
|---|---|---|---|---|
| Hero „FRONTEND" | Baloo 128px, ls -0.025em | 96px | **128px** | ✅ behoben |
| Hero „Hello! I am" | Montserrat 64px | 46px | **64px** | ✅ behoben |
| About „Let's work…" | ~120px | 115px | 115px | ≈ (−5px, ungefährer Sollwert, nicht geraten verändert) |
| Skill set | Baloo 96px | 96px | 96px | ✅ |
| My work | Baloo 96px | 96px | 96px | ✅ |
| References „Need a teamplayer?" | Baloo **45px** | 45px | 45px | ✅ exakt |
| References Subtitle | Montserrat 32px weiß | 32px | 32px | ✅ exakt |
| Contact Titel | Baloo **90px** | 88px | **90px** | ✅ behoben |
| Contact „Got a problem?" | Montserrat Bold 32px #5988FF | 32px | 32px | ✅ exakt |
| Blaues Band-Gradient | **151.49deg** (Skills) / 155.43deg (Refs), Stops 33.96/36.71/112.25 % | 115deg, 2 Stops | **151.49deg, 3 Stops** | ✅ behoben |
| About „Let's work…" | Baloo **121px**, tracking +1.21px | 115px | **121px** | ✅ behoben |
| About „I am" | Baloo 45px | 45px | 45px | ✅ |
| About Verfügbarkeit | Montserrat 18px, gap 48px | 16px / 32px | **18px / 48px** | ✅ behoben |
| Work Projekt-Titel | Baloo 45px #5988FF | 45px | 45px | ✅ exakt |
| Work Tech-Zeile | Montserrat 23px #5988FF | 23px | 23px | ✅ exakt |
| Work Beschreibung | Montserrat 16px schwarz | 16px | 16px | ✅ exakt |
| **Buttons (global)** | Poppins **23px**, padding 15/30px | 18px / 13–30px | **23px / 15–30px** | ✅ behoben (Work/About/Contact) |
| Sektions-Padding | Seam-Gaps 127–140px | 128px (`$space-xl`) | 128px | ≈ innerhalb Toleranz |

## G. Phase 5 — Pixel-Diff: technischer Blocker
Ein echter **Screenshot/Pixel-Diff Code↔Figma** ist in dieser Umgebung nicht möglich:
`preview_screenshot` des Dev-Servers **timeoutet** (30 s), Claude-in-Chrome erreicht
localhost nicht. QA erfolgt daher über **DOM-Messung** (Geometrie, Overflow, z-index,
Schriftgrößen, Farben). Für einen visuellen 1:1-Abgleich nötig: ein erreichbarer
**Vercel-Preview-Deploy** ODER vom Nutzer gelieferte Screenshots ODER Freigabe, ein
Headless-Screenshot-Tool (Playwright) als Dev-Dependency hinzuzufügen.

---

## G. Phase 5 — Visueller QA-Diff (Screenshot SOLL↔IST), 2026-06-21

**Pipeline (entsperrt):** IST-Screenshots via **Puppeteer** (headless Chromium) gegen den
Dev-Server `localhost:4201`, Animationen eingefroren (`animation/transition:none`,
`.reveal` forciert sichtbar), 1× durchgescrollt für Lazy-Render. Tooling liegt **außerhalb**
des Projekts (`../.qa-tooling/shoot.js`) — kein Eingriff in den Angular-Stack.
SOLL via Figma-MCP `get_screenshot` (Desktop 1440×6587, Mobile 390×7786).
Vergleichsbilder: `.figma-ref/cmp-*.png`.

**Gesamtrhythmus:** IST-Seitenhöhe **6470 px** vs SOLL **6587 px** (−1.8 %) → Sektionsabfolge/
Spacing stimmen im Großen. Mobile IST **8263** vs SOLL **7786** (+6 % — eine Mobile-Sektion läuft höher).

| Abschnitt | Abweichung (SOLL vs IST) | Korrektur | Status |
|---|---|---|---|
| **Hero** | Foto deutlich zu klein (Box max-width 600px vs Figma **761px**) | Foto-Spalte 42→**46%**, max-width 600→**720px**, width 80→**100%** | ✅ behoben (cmp-hero2.png) |
| Hero | Großer Kreis E3 minimal kleiner-wirkend | E3 = 61.94vw bereits korrekt; Restdiff = Foto-Overlap | ≈ ok |
| Hero | Greeting/Titel Größe + Position | 64px / 128px bereits gesetzt | ✅ |
| **About** | Titel „Let's work together" rendert etwas **größer** als SOLL | exakter Figma-Titel-Wert noch nicht per MCP gezogen | ⏳ offen |
| About | Verfügbarkeit 3 Items (located/remote/relocate) | stimmt | ✅ |
| **Skills** | Band: „Skill set" sitzt **tiefer**, mehr Top-Padding; Icons etwas kleiner | Spacing-Feintuning ausstehend | ⏳ offen |
| **Work** | Projektbilder = **Platzhalter** (`placeholder.svg`) statt echter Screenshots | Content (Leons echte Bilder), kein Design-Bug | ⛔ Content |
| Work | Deko-Kreise vorhanden, hinter Karten (z-index ok) | — | ✅ |
| **References** | Band + 3 Karten vorhanden; Texte = Platzhalter | Layout ok / Content offen | ✅ / ⛔ |
| **Contact** | Layout + Form + Kreise vorhanden | — | ✅ |
| **Footer** | vorhanden | — | ✅ |

**Behoben & verifiziert:** Hero-Foto (Vorher/Nachher: `cmp-hero.png` → `cmp-hero2.png`).
**Noch offen (belegt, brauchen exakte MCP-Node-Werte, kein Raten):** About-Titel-Größe,
Skills-Band Top-Padding/Icon-Größe, Mobile-Sektion +6 % Höhe.
**Nicht fixbar von mir (Content):** echte Projekt-Screenshots/Links, echte References.

**Leitplanken eingehalten:** Stack unverändert (Angular/SCSS), Inhaltssprache unverändert,
nur screenshot-belegte Korrekturen, Tooling außerhalb des Projekts.

### G.2 Korrekturen Runde 2 (nach User-Freigabe „alle Baloo-Headings auf Regular")

| Fix | Figma-Beleg (MCP) | vorher → jetzt | verifiziert |
|---|---|---|---|
| Baloo-Headings **Regular** statt Bold (global h1–h4 + Hero/Work/References/About/Skills-Titel) | alle Baloo-Texte = `font-['Baloo:Regular']` (400) | 700 → **400** | cmp-hero3.png (Hero „FRONTEND DEVELOPER" deckt sich mit SOLL) |
| About-Titel Größe/Tracking | Baloo 121px, tracking 1.21px | 115px/0 → **121px / +0.01em** | cmp-mid2.png |
| Skills „Skill set" Position | top 56px (Band 632px) | Band-Padding 128 → **64px** (Titel sitzt höher) | cmp-mid2.png |
| Skills/References Verlaufswinkel | 151.49° / 155.43° | 115° → **151.49°** (ein Token) | Build ok |

Logos (Header/Footer-Wortmarke) bleiben bewusst Bold — sind keine Überschriften.

**Stand Phase 5:** Hero (Foto + Titelgewicht), About (Titelgewicht/-größe), Skills
(Titelposition + Verlauf) **1:1 nachgezogen & per Screenshot bestätigt**. Seitenhöhe
IST 6221 vs SOLL 6587 (−5.6 %) — Sektionsabfolge stimmt, Restdifferenz v. a. durch
Platzhalter-Projektbilder (kleiner als echte Screenshots). Verbleibend: echte
Projekt-Screenshots/Links + References-Texte = **Content (Leon)**, kein Design-Bug.

### G.3 Mobile section-by-section QA (Phase 4 + 5), 2026-06-21

Beide Frames 390px breit → direkter Vergleich (`mob-*.png`). IST-Mobile 8183 vs SOLL 7786.

| Sektion | Abweichung (SOLL vs IST mobil) | Korrektur | verifiziert |
|---|---|---|---|
| **About** | Titel/„I am"/Verfügbarkeit links statt **zentriert**; Titel zu klein (40px vs ~64px) | `text-align:center` (mobil), Titel `clamp(4rem,16vw,…)` = ~64px; Body bleibt links (wie SOLL) | mob-about3.png |
| **Work** | Kartentext links statt **zentriert** (mobil) | `work__info`/`__buttons` zentriert mobil, ab Desktop links | mob-work2.png |
| Hero | Kreis E3 + Bubbles vorhanden; Foto etwas kleiner als SOLL | Foto-Box mobil ok belassen (user-getunt) | mob-hero-about |
| Skills | 3 Icons/Reihe (früher 2) | bereits gefixt | – |
| References / Contact / Footer | Layout/Ausrichtung stimmen (Contact links, Refs zentriert) | – | mob-lower.png |

Desktop & Mobile sind damit **section-by-section** abgeglichen.

### G.4 Phase 2 — Komponenten/Assets (Befund)
Kein **komplett fehlendes** Component/Asset gefunden: alle Sektionen (Hero, About,
Skills, Work, References, Contact, Footer) + Buttons, Social-Icons, Skill-Icons (SVG),
Verfügbarkeits-Icons und Legal-Seiten sind vorhanden. Die Lücken zu „1:1" sind:
(a) **dekorative Kreise** → in Phase 3 ergänzt; (b) **Platzhalter-Content** (Projekt-
Screenshots/-Links, References-Texte, Footer-Wortmarke statt Logo-Icon) → Leons Inhalte,
kein fehlendes Design-Element.

### G.5 Bewusste, dokumentierte Abweichungen
- **Work-Karten: 2 Buttons** („Live test" + „Github") auf Desktop, obwohl Figma-Desktop
  nur „Github" zeigt — beibehalten für Funktion; das 2-Button-Muster existiert im
  Figma-**Mobile** ohnehin. Mobile zeigt korrekt beide.
- **Baloo-Headings = Regular** (User-Entscheidung „1:1 Figma"): SOLL-Mobile wirkt teils
  fetter, Figma-MCP weist aber durchgehend `Baloo:Regular` aus → Regular beibehalten.
- **Skills-Icons** 60px (Figma 75px) — bewusst kleiner gelassen (Lesbarkeit/Abstände),
  geringe Differenz.

### G.6 Vormals dokumentierte Abweichungen — jetzt aufgelöst (1:1)

| Punkt | vorher | jetzt | Beleg |
|---|---|---|---|
| Work-Karten Buttons | 2 auf Desktop (Abweichung zu Figma) | **Desktop nur „Github", Mobile beide** — exakt wie Figma (responsiv) | cmp-work2.png (Desktop = 1 Button) |
| Skill-Icons | 60px | **75px** (Figma-Maß) | Build ok, Mobile 390px kein Overflow |

Damit sind **alle design-seitigen** Abweichungen geschlossen. Verbleibend ausschließlich
**Content** (echte Projekt-Screenshots/-Links, References-Texte, Footer-Logo-Icon) — diese
kann ich ohne Leons Material nicht 1:1 herstellen, ohne das Design neu zu interpretieren
(was die Leitplanke verbietet).

---

## H. Live-Abgleich im Browser (Claude in Chrome) — Desktop + Mobile

Methode: lokaler Dev-Stand (`http://localhost:4201`) live in Chrome geöffnet und Section
für Section gegen die Figma-Frames gespiegelt (SOLL = Figma-MCP-Renders der jeweiligen
Section-Nodes, IST = Live-Browser bzw. Puppeteer-Screenshot bei 390 px, da Chrome-Fenster
nicht unter ~500 px schrumpft und `preview_screenshot` timeoutet).

### Gefundene & behobene Abweichungen (durch visuellen Vergleich belegt)

| # | Section | SOLL (Figma) | IST (vorher) | Fix |
|---|---------|--------------|--------------|-----|
| H1 | Skills | „Growth mindset"-Icon sichtbar | **Broken-Image** (404) | Datei `growth mindset.svg` → `growth-mindset.svg` umbenannt (Leerzeichen → Bindestrich; Datenfeld nutzt Kebab-Case). Hover-Datei analog umbenannt. |
| H2 | References | Karte: **Name → Projekt → Zitat** | Zitat → Name → Projekt (Reihenfolge vertauscht) | `references.html`: `<figcaption>` vor `<blockquote>` gestellt. Gilt Desktop + Mobile. |
| H3 | Contact | Kreis E11 im **Leerraum unten-links**, „Contact me!" lesbar | Blauer Kreis lag hinter dem blauen „Contact me!" → Text unsichtbar (blau auf blau) | `contact.scss`: E11 `top: 51%` → `74%` (unter die CTA-Zeile). Nur Desktop (mobil ist E11 ausgeblendet). |
| H4 | References (mobil) | Horizontales **Karussell** (3 Karten nebeneinander, scrollbar, nächste lugt hervor) | Vertikaler Stapel | `references.scss`: `&__grid` mobil `display:flex; overflow-x:auto; scroll-snap-type:x`, Karten `flex:0 0 14.25rem` (228px) + `scroll-snap-align`; ab Desktop wieder 3-Spalten-`grid`. |
| H5 | Hero Scroll (mobil) | Senkrechter Text „SCROLL down ↓" rechts neben dem Foto | Text **waagerecht & abgeschnitten** („down →" am rechten Rand) | Ursache: `.hero__scroll` trägt `reveal-4`; dessen `fade-up` animiert `transform` und überschrieb das `rotate(90deg)`. Fix: Rotation entfernt, Label per `writing-mode: vertical-rl` senkrecht (kein transform → kein Konflikt). Desktop-Zentrierung von `translateX(-50%)` auf `width:0`+`align-items:center` umgestellt (gleicher Konflikt latent vermieden). |
| H6 | Hero Bubbles (mobil) | Ellipse 5/6 bluten unten aus (y762/886 im 844er Frame) | Bubbles zu hoch (top 77%/92%) → wirkten wie freistehende Bälle | `hero.scss`: `&__bubble--1` top `77%`→`90%`, `&__bubble--2` top `92%`→`104%` (Figma-Koordinaten, bluten jetzt an der Unterkante aus). |

### Bestätigt 1:1 (keine Änderung nötig)
- **Desktop**: Hero (Kreis/Foto/Greeting/Title/SCROLL/Socials), About (Titel-Farbe via
  `getComputedStyle` als durchgehend `#5988FF` verifiziert — kein Zweifarben-Bug), Skills
  (6+5, Reihe 2 zentriert), Work (alternierende Karten, je 1 „Github"-Button), Footer.
- **Mobile (390)**: Burger-Menü, Hero gestapelt mit Bubbles, Skills 3/3/3/2, Work-Karten
  Bild-oben + 2 Buttons (Live test + Github), Contact lesbar, Footer zentriert.

### Bewusst bestehende Differenzen (nicht „Fehler")
- ~~References mobil: Karussell vs. Stapel~~ → **behoben (H4)**: mobiles Karussell jetzt
  implementiert (horizontaler Flex-Scroll, Scroll-Snap, Karten 228px, nächste Karte lugt
  hervor — wie Figma 304:694). Desktop bleibt 3-Spalten-Grid.
- **Inhalts-Lücken** (kein Design): echte Projekt-Screenshots (statt Platzhalter-Mockups),
  echte Repo-/Live-Links, echte Referenz-Namen/Zitate, Footer-Logo-Icon statt Wortmarke.

Build nach den Änderungen grün (kein Server-/Konsolen-Fehler).
