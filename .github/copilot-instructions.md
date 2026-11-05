# Copilot instructions

This repo is a single-page HTML slide deck, "Future of Software Engineering in the Age of AI" by James Gress, published to GitHub Pages at https://jmgress.github.io/futureofswe/.

## Structure

- `index.html` holds all slides. Each slide is a `<section class="slide ...">` inside `<main class="deck">`, preceded by a `<!-- N -->` comment with its 1-based number. Speaker notes go in an `<aside class="notes">` inside the slide.
- `deck.css` has the styling and `deck.js` has the navigation. They're loaded as `deck.css?v=N` and `deck.js?v=N`. Bump `N` when you change either file so browsers don't serve a cached copy.
- Images live in `slides/img/`.
- There's no build step. `.github/workflows/pages.yml` deploys `index.html`, `deck.css`, `deck.js` and `slides/img/` on every push to `main`.
- If you add, remove or reorder slides, renumber the `<!-- N -->` comments so they still match the slide order.

## Previewing

Serve the repo root and open a slide by number with the URL hash:

```sh
python3 -m http.server 8000
# http://localhost:8000/index.html#5 opens slide 5
```

If the port is already in use, pick another. Add a query string such as `?r=1` to bypass the browser cache after edits.

## Required review step after every deck change

- **Local or interactive sessions:** after changing the deck, serve it and open each changed slide in the browser canvas/preview so the user can review it, for example `http://127.0.0.1:<port>/index.html#<slide>`. Take a screenshot to confirm the change rendered correctly before reporting back.
- **Copilot cloud agent:** whenever a pull request changes the deck (`index.html`, `deck.css`, `deck.js` or `slides/img/`), serve the deck, use Playwright to take a screenshot of every changed slide at a 16:9 viewport (for example 1600×900), and embed the screenshots in the pull request description. Label each one with its slide number and title. If a change affects every slide, such as a global style change, include a representative sample of slides.
