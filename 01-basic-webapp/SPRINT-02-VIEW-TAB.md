# Sprint 2: View Tab - Display & Search

## Goals
- Implement View tab with list display
- Add search functionality
- Create card components

## Tasks

### Search System
- [ ] `searches/SearchContext.ts` - Context definition
- [ ] `searches/SearchProvider.tsx` - Context provider with search logic
- [ ] `searches/SearchInput.tsx` + CSS - Search input field
  - Case-insensitive partial match
  - Filter by site name only

### View Component
- [ ] `views/View.tsx` + CSS
  - Wrap with SearchProvider
  - Host SearchInput and List

### List Component
- [ ] `lists/List.tsx` + CSS
  - Get filtered entries from SearchContext
  - Map to Card components
  - Responsive: table view (large) / card view (small)
  - Show AddButton at end

- [ ] `lists/AddButton.tsx` - Button to add new entry

### Card Component
- [ ] `cards/Card.tsx` + CSS
  - Display entry data
  - Edit/Delete buttons
  - Glass look styling (pink theme)

- [ ] `cards/SiteField.tsx` - Site name field
- [ ] `cards/UsernameField.tsx` - Username field
- [ ] `cards/PasswordField.tsx` - Password field (visible by default)

### Integration
- [ ] Connect to StorageContext for data
- [ ] Implement edit mode toggle
- [ ] Implement delete (soft delete: status = "deleted")

## Completion Criteria
- [ ] View tab shows all active entries
- [ ] Search filters by site name
- [ ] Cards display correctly on mobile & desktop
- [ ] Can edit entries inline
- [ ] Can delete entries (soft delete)
- [ ] AddButton appears at list end

## Notes
[Space for implementation notes]
