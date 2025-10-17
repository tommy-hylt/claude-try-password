# PickPassword - Password Manager Project

## Project Overview
PickPassword is a comprehensive password manager project built progressively through 4 sub-projects, each adding more functionality and deployment options. The project uses **Vite, React, and TypeScript** and culminates in multiple deployment formats.

## Project Goals
Build a password manager that:
- Stores username/password for different websites
- Retrieves credentials based on site name matching
- Uses AI (Grok) for intelligent site name matching
- Deploys as a Progressive Web App (PWA)
- Works as a Chrome Extension

## Technology Stack
- **Build Tool**: Vite
- **Framework**: React 19
- **Language**: TypeScript
- **Storage**: localStorage
- **AI**: Grok API for intelligent matching
- **Deployment**: GitHub Pages, Chrome Web Store

## Project Structure

This project is split into 4 progressive sub-projects:

```
PickPassword/
├── 01-basic-webapp/          # Sub-Project 1: Basic functionality
├── 02-ai-matching/           # Sub-Project 2: AI-powered search
├── 03-pwa-deployment/        # Sub-Project 3: PWA + GitHub Pages
├── 04-chrome-plugin/         # Sub-Project 4: Chrome Extension
└── README.md                 # This file
```

### Sub-Project Progression

#### 01-basic-webapp: Foundation
**Goal**: Build a functional web-based password manager

**Features**:
- Add, view, edit, delete password entries
- Simple text-based search
- localStorage persistence
- Basic CRUD operations

**Tech**: Vite + React + TypeScript + localStorage

**Status**:
[ ] Development
[ ] Revamping
[ ] Completed

**See**: `01-basic-webapp/README.md` for detailed requirements
**See**: `01-basic-webapp/PLANNING.md` for detailed planning

---

#### 02-ai-matching: Intelligent Search
**Goal**: Enhance search with AI-powered matching

**New Features**:
- Grok API integration
- Intelligent site name matching (e.g., "fb" → "Facebook")
- Fallback to basic search if AI unavailable
- Caching for performance

**Builds On**: Sub-Project 1

**Tech**: All from Sub-Project 1 + Grok AI API

**Status**:
[ ] Development
[ ] Revamping
[ ] Completed

**See**: `02-ai-matching/README.md` for detailed requirements

---

#### 03-pwa-deployment: Progressive Web App
**Goal**: Convert to PWA and deploy publicly

**New Features**:
- Service worker for offline support
- App manifest for installability
- Deployed to GitHub Pages
- Works on mobile devices
- Install as app on home screen

**Builds On**: Sub-Project 2

**Tech**: All from Sub-Project 2 + PWA APIs + GitHub Actions

**Status**: To-be confirmed

**See**: To-be confirmed

---

#### 04-chrome-plugin: Browser Extension
**Goal**: Package as a Chrome Extension

**New Features**:
- Browser toolbar integration
- chrome.storage API
- Popup UI
- Optional: Auto-fill functionality
- Optional: Chrome Web Store publication

**Builds On**: Sub-Project 2

**Tech**: All from previous + Chrome Extension APIs

**Status**: To-be confirmed

**See**: To-be confirmed

## FAQ

### Q: Do I need to complete all sub-projects?
**A**: No! Each sub-project builds on the previous one, but you can stop at any point. For example:
- Stop at Sub-Project 1 for a basic web app
- Stop at Sub-Project 2 for AI-enhanced version
- Stop at Sub-Project 3 for a deployed PWA
- Complete all 4 for full experience
- Currently, sub-project 3 and 4 are not yet confirmed.

**Good luck with your PickPassword project!** 🚀
