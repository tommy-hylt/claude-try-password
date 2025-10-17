# Sprint 1: Project Setup & Structure

## Goals
- Initialize Vite + React + TypeScript
- Set up folder structure
- Create basic file skeleton

## Tasks

### Setup
- [ ] `npm create vite@latest . -- --template react-ts`
- [ ] `npm install`
- [ ] Test dev server runs: `npm run dev`
- [ ] Copy .gitignore template
- [ ] Initialize git (optional)

### Create Folder Structure
```
src/
├── cards/
├── lists/
├── searches/
├── tabs/
├── raws/
├── views/
├── storages/
├── App.tsx
├── App.css
└── main.tsx
```

### Create Type Definitions
- [ ] Create `storages/passwordEntry.ts`
```typescript
export interface PasswordEntry {
  id: string;
  status: "active" | "deleted";
  site: string;
  username: string;
  password: string;
  remark: string;
}
```

### Create Storage Layer
- [ ] `storages/useStorage.ts` - localStorage hook
- [ ] `storages/StorageContext.ts` - Context definition
- [ ] `storages/StorageProvider.tsx` - Context provider

### Create Tab System
- [ ] `tabs/tabValue.ts` - Tab type definition
- [ ] `tabs/TabContext.ts` - Context definition
- [ ] `tabs/TabProvider.tsx` - Context provider
- [ ] `tabs/TabBar.tsx` + CSS - Tab navigation
- [ ] `tabs/TabItem.tsx` + CSS - Individual tab

### Update App.tsx
- [ ] Wrap with StorageProvider
- [ ] Wrap with TabProvider
- [ ] Add TabBar component
- [ ] Add conditional rendering for View/Raw tabs

## Completion Criteria
- [ ] Dev server runs without errors
- [ ] All folders created
- [ ] Type definitions in place
- [ ] Providers set up
- [ ] Tab switching works (even if content is empty)

## Notes
[Space for implementation notes]
