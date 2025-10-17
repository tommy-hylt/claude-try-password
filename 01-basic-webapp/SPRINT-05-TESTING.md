# Sprint 5: Testing & Bug Fixes

## Goals
- Test all functionality
- Fix bugs
- Add unit tests for critical functions

## Tasks

### Manual Testing Checklist
- [ ] Add new password entry
- [ ] Edit existing entry
- [ ] Delete entry (soft delete)
- [ ] Search by site name
- [ ] Switch between View and Raw tabs
- [ ] Edit JSON in Raw tab
- [ ] Save changes in Raw tab
- [ ] Invalid JSON shows error
- [ ] Data persists after refresh
- [ ] Works on mobile viewport
- [ ] Works on desktop viewport

### Unit Tests
- [ ] Add tests for `useStorage.ts`
  - Test save to localStorage
  - Test load from localStorage
  - Test add entry
  - Test update entry
  - Test soft delete

- [ ] Create `storages/useStorage.test.ts`

### Edge Cases
- [ ] Empty storage (first use)
- [ ] Very long site names
- [ ] Special characters in passwords
- [ ] Duplicate site names
- [ ] Deleted all entries

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge

## Completion Criteria
- [ ] All manual tests pass
- [ ] Critical unit tests written
- [ ] No console errors
- [ ] No broken functionality
- [ ] Works across browsers

## Notes
[Space for bugs found and fixes]
