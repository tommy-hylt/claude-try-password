# Planning Document - Basic Web App

## Design Decisions

### UI/UX Design
- [ ] Single-page app
- [ ] Tabbed interface (View / Raw)
- [ ] View tab contains a Search bar and a List
- [ ] Raw tab contains a Textarea for directly editing

**Styling Approach**:
- [ ] Plain CSS
- [ ] One CSS for one TSX file
- [ ] Use path and component name as classname. E.g. `cards-Card` for cards/Card.tsx

**Color Scheme**: 
- Pink and white
- Glass look
- Add an abstract background under the glass

### Functional Decisions

**Search Behavior**:
- Case-sensitive
- Partial match
- Search site name only

**Data Validation**: 
- Site name: Does not allow empty
- Username: Allow empty
- Password: Allow empty
- Remark: Allow empty

## Coding Style

- One .tsx file one component
- Separate CSS to .css file
- Write strictforward
- Split long logic
- Keep .tsx short, best within 150 lines
- Use `Context` to pass values and functions if too deep
- Avoid using global CSS

## Component Breakdown

### 1. App.tsx
**Responsibilities**:
- Main application container
- Use <StorageProvider> and <TabProvider>
- Host <TabBar>, <View> and <Raw>

### 2. View.tsx
- Use <SearchProvider>
- Host <SearchInput> and <List>

## localStorage Implementation

### Storage Key
- Access through storages/useStorage.ts
- Use "storages-useStorage-1" as key
- Store the whole list as one single JSON

## Development Phases

### Phase 1: Project Setup
- [ ] Initialize Vite project
- [ ] Configure TypeScript
- [ ] Set up folder structure
- [ ] Install necessary dependencies
- [ ] Create basic component structure

### Phase 2: Core Functionality
- [ ] Implement localStorage utilities
- [ ] Create components

### Phase 3: Testing & Bug Fixes
- [ ] Add test cases to functions, e.g. useStorage
- [ ] Add test cases to test UI

### Phase 5: Styling & Polish
- [ ] Apply consistent styling
- [ ] Make responsive for mobile
- [ ] Add loading states if needed
- [ ] Add animations/transitions

### Phase 6: Revamp
- [ ] Revamp files if they do not obey coding style
- [ ] Rethink and revamp files if there is simpler approach
- [ ] Code cleanup and refactoring

## Dependencies
- Use basic Vite and REACT and TypeScript
- Try not to use other thrid party libraries

## Migration Path to Sub-Project 2
- Search function will be replaced by AI call
- Basic search function will be a backup plan if AI fails