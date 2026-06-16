# Design-Spec — Version 2 (aus Figma extrahiert)

Quelle: Figma `aFr22LBDHVlx4rRIr9FFR1`, Seite „Portfolios".
Frames: `04_Version 2 - Desktop` und `05_Version 2 - mobile` (node `304:694`).
Extrahiert via Figma MCP `get_design_context` (echte Werte, keine Schätzung).

## Farben (Farbstile aus Figma)
- **Blau (primary):** `#5988FF`  (style 2 blue/blue)
- **Blau tief (Verlauf-Ende):** `#0043F0`
- Verlauf (Skill-/References-BG): `linear-gradient(115deg, #5988FF 34%, #0043F0 112%)`
- Weiß: `#FFFFFF` · Schwarz: `#000000`
- Purple light: `#1E0A7D` · Purple 2: `#797EF3`

## Schriften
- **Headings → „Baloo 2"** (Regular): „Let's work together" 64px, „Skill set" 64px,
  „My work" 64px, Projekt-Titel 45px, „Contact" 45px, Hero „FRONTEND" 73px / „DEVELOPER" 67px.
- **Body → „Montserrat"** (Regular/SemiBold/Bold): Fließtext 16px, Subtitles/Tech 23px,
  „Hello! I am …" 36px, Namen/Orte 18px.
- **UI/Buttons → „Poppins"** (Regular): Buttons 23px, Formular-Platzhalter 16px,
  „Scroll down" 23px.

## Effekte (Schatten)
- `s2 shadow`: drop-shadow(5px 5px 15px rgba(0,0,0,0.15))  ← Karten/Buttons
- `Growth mindset shadow`: drop-shadow(0 4px 9px rgba(0,0,0,0.45))

## Sektionsreihenfolge (oben→unten)
1. **Header** — Logo + Nav (Desktop) / Burger (Mobile), `backdrop-blur`
2. **Hero** — „Hello! I am Sofia" (Montserrat 36) · „FRONTEND DEVELOPER" (Baloo) ·
   Foto · Deko-Bubbles · „Scroll down" + Pfeil (gedreht)
3. **About „Let's work together"** — Verfügbarkeits-Block: „I am" / „located in Munich" /
   „open to work remote" / „open to relocate" (je mit Icon) · Info-Text · „Send a message"
4. **Skill set** (Verlaufs-BG) — Icons: Angular, TypeScript, JavaScript, HTML, Supabase,
   Git, CSS, Material Design, REST-API, Scrum · **„Growth mindset"-Badge**
5. **My work** — Projektkarten, je: Bild · Titel (Baloo 45) · Tech (Montserrat 23) ·
   Beschreibung (Montserrat 16) · **„Live test" + „Github"** (zwei Buttons).
   Mobile-Projekte: Join, Pollo Loco, DA Bubble, Pokédex (Desktop zusätzl. Simple CRM/Crypto).
6. **References „Need a teamplayer?"** (Verlaufs-BG) — Testimonial-Karussell (Name, Projekt, Zitat)
7. **Contact** — „Got a problem to solve?" · Form: name/email/message · Privacy-Checkbox ·
   „Say hello ;)" (erst nach Checkbox aktiv)
8. **Footer** (Verlaufs-BG) — Logo · „© Sofia Müller 2022" · Social-Icons · „Legal Notice"

## Desktop-Details (Frame 1440px, node 230:457)
- **Header:** padding 24/77px, Logo links, Nav rechts (gap 36): „About me / Skill set / My work"
  Montserrat 23px #5988FF · **DE/EN-Sprachumschalter** (EN fett = aktiv). `backdrop-blur 32.5px`.
- **Hero:** „Hello! I am …" Montserrat **64px** #5988FF · „FRONTEND" Baloo **128px** (tracking -3.2) ·
  „DEVELOPER" Baloo **118px** (tracking -2.36) · vertikales „SCROLL" Montserrat Medium 23px + Linie ·
  Social-Icons vertikal rechts (github/email/linkedin, je 40px). Foto links gross.
- **About:** „Let's work together" Baloo **121px** (linke Spalte) · „I am" Baloo 45px ·
  Verfügbarkeit (gap 48): „located in Munich" / „open to work remote" / „open to relocate"
  (Montserrat 18px + Custom-Icons) · rechte Spalte: Info-Text Montserrat 23px + „Send a message".
- **Skill set:** Verlaufs-BG `linear-gradient(151deg,#5988FF,#0043F0)` · „Skill set" Baloo **96px** weiss ·
  Icons 75px (gap 104), Name Montserrat 16px · Reihen: Angular, TypeScript, JavaScript, HTML, Scrum,
  Supabase / Git, CSS, REST-API, Material Design + **Growth-mindset-Badge** (Spezial-Schatten).
- **My work:** „My work" Baloo **96px** · Intro Montserrat 23px · 4 Projekte abwechselnd L/R:
  Join, Pollo Loco, DA Buble, Pokédex · Bild ~620×393 · Titel Baloo 45 · Tech Montserrat 23 ·
  Beschreibung Montserrat 16 · **nur 1 Button „Github"** (Desktop). (Mobile: „Live test" + „Github".)
- **References:** Verlaufs-BG · „Need a teamplayer?" Baloo 45px weiss · Subtitle Montserrat 32px ·
  3 Testimonials (Name Montserrat Bold 24, Projekt Montserrat 16, Zitat Montserrat 18).
- **Contact:** „Contact" Baloo **90px** · „Got a problem to solve?" Montserrat Bold 32px · Text Montserrat 16 ·
  Felder w617 h50 (Message h202), border 1px #5988FF radius 10 · Privacy-Checkbox + „Say hello ;)"
  (Button **deaktiviert/grau #BBB**, bis Checkbox gesetzt).
- **Footer:** Verlaufs-BG · Logo · „© … 2022" Montserrat 23px weiss · Social-Icons · „Legal Notice".
- **Scroll-Anchors:** `anchor 0–5` (Sektions-Sprungziele für Nav + Back-to-top).
- **i18n:** DE/EN-Umschalter vorhanden (spaeter optional).

## Button-Stile
- **Primary s2:** border 2px #5988FF, radius 10, padding 15/30, Schatten s2, Text Poppins 23px #5988FF (transparent).
- **Secondary (Mobile):** gefuellt #5988FF, Text weiss.
- **Send (Contact):** deaktiviert grau #BBB → aktiv erst nach Privacy-Checkbox.

## Hover-/Interaktionen (aus Prototyp via Chrome geprueft)
- **Nav-Link hover:** Link wird **fett + volles #5988FF**, restliche Links bleiben gedaempft. (geprueft)
- **Social-Icon hover:** Icon sitzt in hellblauem Kreis, der beim Hover **voll blau** fuellt. (geprueft)
- Button-, Projektkarten- und Sprachumschalter-Hover pruefe ich live direkt vor dem Bau der
  jeweiligen Sektion (iterativ, nicht alles vorab).
- Nav-Links + Back-to-top scrollen zu den `anchor`-Zielen (Smooth-Scroll).

## Hinweise für den ehrlichen Umbau
- Texte (Name, Ort, Projekte, Testimonials, Foto) werden durch **Leons eigene** ersetzt.
- Skill-Tech-Icons = Standard-Markenlogos (crisp als SVG). Design-spezifische Formen
  (Deko-Kreise, Bubbles, Growth-mindset-Badge) kommen als Asset aus Figma.
