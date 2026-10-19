# Veeresh Gollapu — Premium Cinematic Developer Portfolio

A production-quality personal developer portfolio built with React, Vite, Tailwind CSS, GSAP, and Motion for React.

## Project Structure

```
frontend/
├── public/
│   ├── images/          # High-resolution project previews and portrait assets
│   ├── videos/          # Optional video assets and intro clips
│   ├── icons/           # Favicon and vector icon assets
│   └── documents/       # Resumes, certifications, and PDF assets
├── src/
│   ├── assets/          # Static template assets
│   ├── components/      # Modular UI components (Navbar, Footer, Modals, Intro)
│   ├── pages/           # Public pages (Home, About, Skills, Projects, Experience, Contact)
│   ├── layouts/         # Root application layouts
│   ├── hooks/           # Custom React hooks (useGsapScroll, etc.)
│   ├── data/            # Factual datasets (projects, skills, experience)
│   ├── utils/           # Helper functions and re-exports
│   ├── styles/          # Design tokens and Tailwind CSS global styles
│   ├── App.jsx          # Route configuration and state management
│   └── main.jsx         # Application entry point
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

From inside the `frontend/` directory:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Key Technologies
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 with custom dark navy `#080D16` & electric orange `#FF5A1F` design tokens
- **Motion & Storytelling:** GSAP with ScrollTrigger and Framer Motion
- **Icons:** Lucide React & custom SVG brand icons
