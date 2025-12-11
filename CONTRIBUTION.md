# Contributing to Copycat

**The assembly line is open.**

First off, thank you for considering contributing to Copycat. This project is a raw, industrial experiment in React and API interaction, and we welcome anyone who wants to help maintain the machinery or add new features.

## 1. The Philosophy

Copycat is not a standard polished web app. It is **brutalist**, **tactile**, and **raw**.
When contributing design changes, adhere to the "Xerox" aesthetic:
* **Font**: *Space Mono* is the law.
* **Visuals**: High contrast, dashed borders, sharp edges (no `rounded-xl`), and the specific color palette (`#f2f0f9`, `#ff3366`, `#3d5afe`, `#121212`).
* **Vibe**: It should feel like a piece of paper running through a broken printer.

## 2. Getting Started

### Prerequisites
* Node.js (Version 18+ recommended)
* npm

### Installation
1.  **Fork** the repository on GitHub.
2.  **Clone** your fork locally:
    ```bash
    git clone [https://github.com/your-username/copycat.git](https://github.com/your-username/copycat.git)
    cd copycat
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```

## 3. Development Workflow

### Project Structure
* `src/components/`: Reusable UI parts (Header, Hero).
* `src/pages/`: Main views (Home, Meme Studio).
* `src/index.css`: Global styles and font imports.

### Technical Constraints
* **API Usage**: We use the [CATAAS API](https://cataas.com/). Respect their rate limits.
* **Image Handling**: Do **not** use direct image URLs in `<img>` tags for dynamic content. You must use the `fetch` + `Blob` + `URL.createObjectURL` pattern established in `Hero.jsx` and `Meme.jsx` to prevent browser caching issues.
* **Linting**: Ensure your code is clean before committing.
    ```bash
    npm run lint
    ```

## 4. Submitting Changes

1.  Create a new branch for your feature or fix:
    ```bash
    git checkout -b feature/my-cool-feature
    ```
2.  Commit your changes. We prefer conventional commits (but we aren't strict police about it):
    * `feat: add text size toggle`
    * `fix: resolve image loading timeout`
    * `style: update border thickness`
3.  Push your branch to your fork:
    ```bash
    git push origin feature/my-cool-feature
    ```
4.  Open a **Pull Request** against the `main` branch of the original repository.

## 5. Reporting Issues

If you find a bug or have an idea for the next version (V1.1 Tags Update?), please open an issue using the GitHub Issue Tracker.

* **Bugs**: Describe what happened, what you expected to happen, and include browser console errors if possible.
* **Features**: Explain the "why" behind the feature. Does it fit the *Copycat* vibe?

---

**Collaboration is the fuel.**
