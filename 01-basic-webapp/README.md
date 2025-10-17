# Sub-Project 1: Basic Web App - Password Manager

## Overview
This is the foundational phase of the PickPassword project. The goal is to build a basic web application using Vite, React, and TypeScript that allows users to store and retrieve username/password pairs for different websites using browser localStorage.

## Objectives
- [ ] Set up Vite + React + TypeScript project
- [ ] Create a simple UI for adding site credentials (site name, username, password)
- [ ] Implement localStorage for persisting data
- [ ] Implement basic CRUD operations (Create, Read, Update, Delete)
- [ ] Create another simple UI for batch editing using JSON
- [ ] Create a search/retrieval function to find credentials by site name
- [ ] Add basic styling and responsive design

## Technical Requirements

### Stack
- **Build Tool**: Vite
- **Framework**: React 19
- **Language**: TypeScript
- **Storage**: Browser localStorage
- **Styling**: Most modern basic CSS

### Features to Implement
1. **View All Entries**
   - Display list of all saved credentials
   - Show/hide password toggle
   - Use card view for small screen
   - Use table view for big screen

2. **Add New Password Entry**
   - Put an add button at the end of list
   - New card or new row
   - Visible Fields: Site, Username, Password
   - Validation for required fields
   - Save to localStorage

3. **Search Functionality**
   - Simple text-based search by site name
   - Filter entries as user types
   - Use simple case-insensitive search
   - Will replace with AI in 02-ai-matching project

4. **Update Entry**
   - Edit existing credentials
   - Update localStorage

5. **Delete Entry**
   - Remove credential from list
   - Soft delete only. Keep a hidden `status` field: "active" or "deleted"

## Data Structure

### Password Entry Interface
```typescript
interface PasswordEntry {
  id: string;                    // hidden
  status: "active" | "deleted"   // hidden
  site: string;                  // visible
  username: string;              // visible
  password: string;              // visible
  remark: string;                // visible
}
```

## Setup Instructions

### Prerequisites
- Node.js
- npm or yarn

### Installation
```bash
# Navigate to this directory
cd 01-basic-webapp

# Create Vite project
npm create vite@latest . -- --template react-ts

# Install dependencies
npm install

# [TODO: Add any additional dependencies]
# npm install [package-name]
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure
```
01-basic-webapp/
├── src/
│   ├── cards/
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   ├── UsernameField.tsx
│   │   ├── PasswordField.tsx
│   │   └── SiteField.tsx
│   ├── lists/
│   │   ├── List.tsx
│   │   ├── List.css
│   │   └── AddButton.tsx
│   ├── searches/
│   │   ├── SearchContext.ts
│   │   ├── SearchProvider.ts
│   │   ├── SearchInput.tsx
│   │   └── SearchInput.css
│   ├── tabs/
│   │   ├── TabContext.ts
│   │   ├── TabProvider.tsx
│   │   ├── tabValue.ts
│   │   ├── TabBar.tsx
│   │   ├── TabBar.css
│   │   ├── TabItem.tsx
│   │   └── TabItem.css
│   ├── raws/
│   │   ├── Raw.tsx
│   │   └── Raw.css
│   ├── views/
│   │   ├── View.tsx
│   │   └── View.css
│   ├── storages/
│   │   ├── StorageContext.ts
│   │   ├── StorageProvider.tsx
│   │   ├── passwordEntry.ts
│   │   ├── useStorage.ts
│   │   └── useStorage.test.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md (this file)
└── (other unmentioned files)
```

## Testing Plan
- [ ] [TODO: Define testing strategy - unit tests, integration tests]
- [ ] [TODO: Add testing library dependencies if needed]
- [ ] Test localStorage operations
- [ ] Test CRUD operations
- [ ] Test search functionality

## FAQ
1. [ ] Should passwords are visible by default or hidden with a toggle? Visible. Passwords are just plain text to us.
2. [ ] Do we want to categorize passwords (e.g., Social Media, Banking, etc.)? No need. Keep the app simple.
3. [ ] Should we add a "copy to clipboard" feature? No need.
4. [ ] Do we need export/import functionality for backup? Yes. Use <Raw> to present a <textarea> for editing in JSON directly
5. [ ] What should the color scheme/theme be? Pink glass look

## Success Criteria
- [ ] User can add new password entries
- [ ] User can view all saved passwords
- [ ] User can search for passwords by site name
- [ ] User can edit existing passwords
- [ ] User can delete passwords
- [ ] Data persists in localStorage across sessions
- [ ] UI is responsive and user-friendly
- [ ] Code is well-typed with TypeScript
- [ ] Code is well-structured in seperated files. Keep files short and break long logics into parts.

## Next Steps
After completing this phase, the codebase will be enhanced in sub-project 2 with AI-powered site name matching using Grok.
