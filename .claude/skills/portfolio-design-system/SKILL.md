---
name: portfolio-design-system
description: >-
  "Morning Sky" design system for the personal Salesforce developer portfolio — color palette (Ink,
  Cloud, Sky, Citrus, Mint, Slate), typography (Sora + JetBrains Mono), border-radius and elevation
  tokens, and voice/tone rules. Use whenever designing, building, styling, reviewing, or testing any
  front-end for either portfolio site (the LWR Experience Cloud site or the GitHub Pages LWR site) —
  LWC markup/CSS, Experience Builder theme/branding, hero/nav/cards, buttons, tags, copy, empty
  states, and error messages.
---

<!-- This file is maintained in the Salesforce Portfolio Dev Org repo (where
     docs/design-system.md symlinks to it) and copied into the lwr-portfolio
     repo for reference. §7 below documents each repo's own token
     implementation separately, since they don't share a codebase. -->

# Design System — Personal Salesforce Developer Portfolio

A single reference for how the site looks, feels, and sounds. The theme is **"Morning Sky"** — a nod to the cloud-and-sky language of the Salesforce ecosystem (clouds, Trailhead, "trailblazing"), reinterpreted as a warm sunrise rather than corporate blue. It should feel like a developer's personal notebook, not a SaaS marketing page.

Apply this on **any front-end work** for either portfolio site. When it conflicts with a generic SLDS default, this system wins for the portfolio's own components; keep SLDS structure and accessibility.

---

## 1. Design Principles

1. **Personal, not corporate.** This is one developer's site, not a company's. Every choice should feel like it belongs to a person, not a brand template.
2. **One bold move, quiet everywhere else.** The sunrise gradient and the pill-shaped buttons carry the personality. Everything else — spacing, grays, layout — stays calm and gets out of the way.
3. **Code is part of the aesthetic, not just content.** Monospace type is used deliberately for real code-ish things (tags, snippets, labels like `Apex` or `LWC`) — never decoratively.
4. **Explain, don't impress.** Salesforce has its own dense jargon (Flows, LWC, Apex, orgs). Copy on the site should translate that into plain language for visitors who aren't Salesforce people, while still feeling credible to those who are.

---

## 2. Color Palette

Six named colors. Two do most of the work; the rest are support.

| Name       | Hex       | Role                                                                                                                |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------- |
| **Ink**    | `#1B2440` | Primary text, header/footer background, dark UI surfaces                                                            |
| **Cloud**  | `#F7F8FB` | Main page background — soft, cool off-white, not cream                                                              |
| **Sky**    | `#5B7FDE` | Primary accent — links, primary buttons, focus states                                                               |
| **Citrus** | `#FF9F5A` | Secondary accent — highlights, hover states, small emphasis (use sparingly)                                         |
| **Mint**   | `#8FD6BD` | Tertiary accent — success states, "badge"-style tags, subtle nods to Trailhead-style achievement without copying it |
| **Slate**  | `#6B7280` | Secondary text, borders, muted captions                                                                             |

**Usage rules**

- Sky is the workhorse accent (links, CTAs, active nav). Citrus is a _spice_, not a base — one highlighted element per screen, max.
- Never place Citrus and Mint directly touching each other; route through Ink, Cloud, or Slate as a buffer.
- Dark sections (header, footer, hero) use Ink as background with Cloud text — don't default to near-black `#0B0B0B`.
- Shadows and glows should be tinted with Sky at low opacity (e.g. `rgba(91,127,222,0.15)`) rather than flat black — see §5.
- Maintain WCAG AA contrast: body text is always Ink-on-Cloud or Cloud-on-Ink, never color-on-color for paragraphs.
- Sky (`#5B7FDE`) doesn't clear AA as text on light backgrounds. For link text, icons and primary-button fills use **Sky Strong** (`#3F63C7` — `--portfolio-color-sky-strong`), which passes 4.5:1 on Cloud. Plain Sky stays for large fills, focus rings and glows.
- Alternating section bands use **Cloud 2** (`#EEF1F7` — `--portfolio-color-cloud-2`), Cloud darkened one step — not a grey.

### Dark theme

The LWR site ships a light / dark / auto switch (auto follows the device via
`prefers-color-scheme`). Dark is the same Morning Sky palette with the roles kept —
a deep ink-navy ground, not black; Sky, Citrus and Mint keep their hue.

| Token (`--portfolio-color-*` / `--pf-color-*`) | Light     | Dark      |
| ---------------------------------------------- | --------- | --------- |
| `cloud` (page ground)                          | `#F7F8FB` | `#0F1524` |
| `cloud-2` (bands, chips)                       | `#EEF1F7` | `#161D30` |
| `ink` (body text)                              | `#1B2440` | `#E6E9F2` |
| `slate` (muted text, borders)                  | `#6B7280` | `#9AA3B5` |
| `sky-strong` (links, on-dark text)             | `#3F63C7` | `#8CA6EA` |
| `sky` / `citrus` / `mint`                      | unchanged | unchanged |
| `hero-bg` (always-dark hero ground)            | `#1B2440` | `#1E2740` |

Where they live:

- **Light** — the branding set (`BackgroundColor` / `TextColor` /
  `PrimaryAccentColor`, Builder-editable colour literals — it rejects `var()`).
  `styles.css` `:root` derives `--pf-color-cloud` / `-ink` / `-sky-strong` from the
  matching `--dxp-g-*` output, hex fallback, and defines the Morning-Sky-only tokens.
- **Auto** — `@media (prefers-color-scheme: dark)` in `styles.css` overrides **two
  layers**: `--pf-color-*` (the custom components + the `c:portfolioThemeLayout`
  chrome) and the LWR globals `--dxp-g-root` / `--dxp-g-root-contrast` /
  `--dxp-g-brand` (stock content on the login / error views only).
- **Manual Light / Dark** — `c:themeToggle` writes the same two layers as inline
  custom properties on `<html>` (inline beats the stylesheet and the media query,
  and survives a stale CDN copy of `styles.css`). Its `PALETTES` constant duplicates
  the hexes — **keep it in sync with the `styles.css` dark block**.

Experience Cloud branding sets have no dark variant, so the dark palette lives in
two hand-synced places (`styles.css` + the toggle). Re-check every text/background
pair for WCAG AA when you touch either. The hero is always dark: it pins Cloud/Ink
to their light-theme roles in `portfolioHero.css` and uses `--pf-color-hero-fg`
(always light) for text. Its optional `backgroundImageUrl` layers a WebP behind a
flat `rgba(27,36,64,0.72)` Ink scrim (Ink-tinted, not flat black — §5); the dark
hero colour is the always-there fallback.

The site chrome is `c:portfolioThemeLayout` (a custom LWC theme layout that
replaced the stock `community_byo:scopedHeaderAndFooter`) — header / main / footer,
styled with the `--portfolio-*` tokens, so dark mode just works with no
`!important` reach-in.

---

## 3. Typography

**Two families, clearly distinct roles — not five, not one doing everything.**

| Role                    | Typeface           | Notes                                                                                                                                                                           |
| ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Headlines & UI text     | **Sora**           | Rounded geometric sans — friendly and modern without being cutesy. Used for headings, nav, body copy, buttons.                                                                  |
| Code & technical labels | **JetBrains Mono** | Used _only_ where something genuinely is code-like: inline code, tags (`Apex`, `LWC`, `Flow`), timestamps, small metadata. Not used as a generic "techy" label font everywhere. |

**Type scale** (base 16px, ratio ~1.25)

| Token      | Size | Weight               | Use                     |
| ---------- | ---- | -------------------- | ----------------------- |
| `display`  | 48px | 600                  | Hero headline only      |
| `h1`       | 32px | 600                  | Page/section titles     |
| `h2`       | 24px | 600                  | Subsection titles       |
| `h3`       | 19px | 600                  | Card/project titles     |
| `body`     | 16px | 400                  | Paragraph text          |
| `small`    | 14px | 400                  | Captions, metadata      |
| `mono-tag` | 13px | 500 (JetBrains Mono) | Skill tags, code labels |

**Rules**

- Line length under 80 characters for body copy.
- Sentence case everywhere — no tracked-out ALL-CAPS eyebrows or labels.
- Eyebrow labels and section headings take inline code: wrap a token in backticks (`` Built with `Apex` ``) and it renders in JetBrains Mono. Use it for real technical names, not emphasis.
- Don't bold or color a single word inside a headline for emphasis — if something needs emphasis, it earns its own sentence or its own visual element instead.
- Skip decorative arrows (→) on links/buttons; let the words say what happens.

---

## 4. Border Radius

Radius is used _with intent_ — different values signal different kinds of thing, not one blanket radius on everything.

| Token         | Value | Used on                           |
| ------------- | ----- | --------------------------------- |
| `radius-sm`   | 6px   | Inputs, small tags, code chips    |
| `radius-md`   | 12px  | Cards, panels                     |
| `radius-lg`   | 20px  | Hero images, large feature panels |
| `radius-pill` | 999px | Buttons, nav pills, skill badges  |

Pill-shaped buttons and badges are the one place roundness gets playful — echoing the "badge" language of Salesforce credentialing without literally reproducing it. Cards stay at a moderate 12px so they read as calm containers, not bubbly UI.

---

## 5. Blur & Elevation

Avoid the generic flat `rgba(0,0,0,0.1)` card shadow. Shadows and blur are tinted with Sky to feel like soft light rather than SaaS-kit clutter.

| Token       | Spec                                                                                       | Use                                                         |
| ----------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `shadow-sm` | `0 1px 3px rgba(91,127,222,0.12)`                                                          | Buttons, tags                                               |
| `shadow-md` | `0 8px 24px rgba(91,127,222,0.16)`                                                         | Cards on hover                                              |
| `shadow-lg` | `0 20px 50px rgba(27,36,64,0.18)`                                                          | Modals, elevated panels                                     |
| `blur-nav`  | `backdrop-filter: blur(12px)`, background `--portfolio-nav-bg` (translucent Cloud, themed) | `c:portfolioSiteHeader` — the one sticky nav bar, used once |

Blur is reserved for `c:portfolioSiteHeader` only — a single deliberate "cloud" moment, not scattered glassmorphism across every panel. `--portfolio-nav-bg` is themed (`--pf-color-nav-bg`: translucent Cloud in light, translucent deep Ink in dark).

---

## 6. Voice & Tone

**In one line:** write like you're explaining your work to a friend over coffee, not pitching a company.

**Principles**

- **First person, plainly.** "I built this to..." not "This project was engineered to..."
- **Contractions are welcome.** "It's," "don't," "here's" — this is a person talking, not a press release.
- **Translate the jargon.** If a term (Apex, LWC, Flow, org) shows up, give a visitor without Salesforce background a plain-language handle on it in the same breath, without being condescending to visitors who do know it.
- **Active voice, specific verbs.** "Built a custom approval flow that cut review time in half" beats "Was responsible for approval process improvements."
- **Light humor is fine, jokes about the work aren't required.** Let personality show through word choice and rhythm, not forced quirkiness.
- **Errors and empty states speak plainly, not cutely.** "No projects match that filter yet — try clearing it" rather than an apologetic or jokey message.

**Avoid**

- Corporate buzzwords: "leverage," "synergy," "solutions," "seamless," "robust."
- ALL-CAPS labels or tracked-out eyebrows above headings.
- Middle-dot-joined meta strings ("Apex · LWC · Flow") — write them as a normal list or plain tags instead.
- Arrow-suffixed links/buttons ("View project →").
- Overqualifying every claim — say what you did, plainly.

**Example rewrites**

| Generic / corporate                                      | This site's voice                                                                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| "Leveraged Apex and LWC to deliver a scalable solution." | "Built the backend in Apex and the UI as a Lightning component — it now handles a few thousand records without breaking a sweat." |
| "Submit" (button)                                        | "Send message"                                                                                                                    |
| "An error occurred while processing your request."       | "That didn't go through — mind trying again?"                                                                                     |
| "This project showcases my expertise in automation."     | "This one's about automating the boring parts so people can skip straight to the interesting work."                               |

---

## 7. Design tokens in code

The two portfolio sites are separate codebases with no shared build, so each
implements the `--portfolio-*` tokens as its own CSS-only LWC module. Keep the
**values** in sync between them by hand; the plumbing differs per repo.

### Experience Cloud site (Salesforce Portfolio Dev Org repo)

The tokens live in one CSS-only LWC module:
**`force-app/main/default/lwc/designTokens/designTokens.css`** (namespaced `--portfolio-*`).
Its themeable colour tokens now read from the `--pf-color-*` layer published on
`:root` by `styles.css` (and overridden for dark by the media query / theme toggle),
with the current hexes as fallback — so the theme swap flows through to the custom
components. Non-colour tokens (radius, type scale, shadows) stay literal here.

**In a portfolio component's `.css`** — import it, then use the variables:

```css
@import "c/designTokens";

:host {
  color: var(--portfolio-color-ink);
  background: var(--portfolio-color-cloud);
}
.card {
  border-radius: var(--portfolio-radius-md);
  box-shadow: var(--portfolio-shadow-md);
}
.tag {
  font-family: var(--portfolio-font-mono);
  font-size: var(--portfolio-font-size-mono-tag);
  border-radius: var(--portfolio-radius-pill);
}
```

The import also maps the tokens onto SLDS global styling hooks
(`--slds-g-color-*`, `--slds-g-radius-border-*`, brand-button hooks), so base
Lightning components rendered inside a portfolio component adopt the theme —
never override `.slds-*` classes or base-component internals directly.

**Site chrome** — the header / main / footer shell is `c:portfolioThemeLayout`,
styled with the `--portfolio-*` tokens. The LWR **branding set**
(`sfdc_cms__brandingSet` `content.json`, light colour literals, Builder-editable)
still feeds the stock login / error views and base-component defaults; for dark
mode `styles.css` retints its `--dxp-g-*` output (see the Dark theme section
above). Web fonts are not loaded — the Sora / JetBrains Mono stacks fall back to
system fonts until `@font-face` + CSP trusted sites are wired.

Full list and the SLDS-hook mappings: **`designTokens.css`** in that repo.

### GitHub Pages LWR site (this repo)

No SLDS, branding sets or theme toggle here — just a plain CSS-only LWC module:
**`src/modules/base/designTokens/designTokens.css`**. It sets the same
`--portfolio-*` custom properties on `:host`, plus an auto-dark override under
`@media (prefers-color-scheme: dark)` (there's no manual light/dark toggle on
this site, so "auto" is the only mode).

**In a component's `.css`** — import it by namespace, then use the variables:

```css
@import "base/designTokens";

:host {
  color: var(--portfolio-color-ink);
  background: var(--portfolio-color-cloud);
}
.card {
  border-radius: var(--portfolio-radius-md);
  box-shadow: var(--portfolio-shadow-md);
}
```

**Known gap:** the existing components (`ui/banner`, `ui/contentBlock`,
`ui/contentCard`, `ui/footer`, `ui/icon`, `base/app`) predate this module and
still hand-roll their own one-off colours (e.g. `app.js`'s `#1798c1` heading,
`contentCard.css`'s `#54b3d6` links) rather than the Morning Sky palette.
Migrating them to `var(--portfolio-color-*)` is a deliberate visual-design
task for `experience-designer` / `lwr-static-developer` to pick up — don't
silently restyle a component as a side effect of unrelated work.

### Token reference (both repos)

```
--portfolio-color-{ink,cloud,cloud-2,sky,sky-strong,citrus,mint,slate,hero-bg}
--portfolio-color-sky-a15                     /* tinted focus rings / glows */
--portfolio-font-{sans,mono}
--portfolio-font-size-{display,h1,h2,h3,body,small,mono-tag}
--portfolio-font-weight-{regular,medium,semibold}
--portfolio-line-height-{body,heading}   --portfolio-measure
--portfolio-radius-{sm,md,lg,pill}
--portfolio-shadow-{sm,md,lg}
--portfolio-nav-blur   --portfolio-nav-bg
```
