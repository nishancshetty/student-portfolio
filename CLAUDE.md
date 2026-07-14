# CLAUDE.md

## Project Overview

This repository contains my personal portfolio website. The goal is to create a fast, responsive, accessible, and modern website that showcases my skills, projects, experience, and contact information.

---

# Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

### Development Tools

* Git
* GitHub
* Visual Studio Code

---

# Project Goals

* Clean and maintainable code
* Mobile-first responsive design
* Fast page loading
* Accessibility (WCAG-friendly)
* Consistent UI/UX
* Easy to extend with new projects and sections

---

# Folder Structure

```text
portfolio/
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── README.md
└── CLAUDE.md
```

---

# Coding Standards

## HTML

* Use semantic HTML elements.
* Keep indentation consistent (2 spaces).
* Include meaningful alt text for all images.
* Avoid unnecessary wrapper elements.
* Keep markup simple and readable.

## CSS

* Use descriptive class names.
* Follow a mobile-first approach.
* Organize styles by section.
* Avoid duplicate CSS rules.
* Use CSS variables for colors and spacing where appropriate.
* Keep selectors simple.

## JavaScript

* Use modern ES6+ syntax.
* Prefer `const` over `let`; avoid `var`.
* Keep functions small and reusable.
* Write meaningful variable and function names.
* Avoid global variables.
* Comment only when logic is not obvious.

---

# Design Guidelines

* Clean and minimal aesthetic
* Consistent spacing throughout
* Smooth scrolling and subtle animations
* High contrast for readability
* Professional typography
* Responsive on all screen sizes

---

# Performance Guidelines

* Optimize image sizes.
* Minimize unnecessary JavaScript.
* Avoid blocking resources.
* Compress assets before deployment.
* Lazy-load images where appropriate.

---

# Accessibility Guidelines

* Use semantic HTML.
* Maintain keyboard accessibility.
* Ensure sufficient color contrast.
* Label all form elements.
* Include descriptive alt text.
* Use logical heading hierarchy.

---

# Git Conventions

Use Conventional Commits.

Examples:

```text
feat: add projects section
fix: correct navbar alignment
style: improve hero spacing
docs: update README
refactor: simplify contact form logic
```

---

# AI Assistant Instructions

When making changes:

* Preserve the existing project structure.
* Do not introduce unnecessary libraries or frameworks.
* Prioritize readability over clever solutions.
* Keep the design consistent with the existing style.
* Reuse existing components and styles whenever possible.
* Explain major architectural changes before implementing them.
* Avoid breaking responsive layouts.
* Maintain accessibility best practices.
* Write clean, production-ready code.

---

# Future Enhancements

* Dark mode
* Project filtering
* Blog section
* Contact form backend
* Animations using GSAP or Framer Motion
* SEO optimization
* Lighthouse score improvements
* Progressive Web App (PWA)

---

# Definition of Done

A task is complete when:

* The feature works correctly.
* The website remains responsive.
* No console errors are present.
* Accessibility is maintained.
* Existing functionality is unaffected.
* Code follows the project conventions.
* Changes are committed using Conventional Commits.

* ## Project Rules

### Forms

- Always use controlled React components.
- Validate every input before submission.
- Display inline validation messages.

### Accessibility

- Every form input must have a label.
- Use semantic HTML.
- Add appropriate aria-label attributes.

### Testing

- Every new component must include React Testing Library tests.
- Test validation, successful submission, and edge cases.
- Code is not complete until tests pass.
