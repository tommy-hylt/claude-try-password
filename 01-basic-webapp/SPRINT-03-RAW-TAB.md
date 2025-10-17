# Sprint 3: Raw Tab - JSON Editing

## Goals
- Implement Raw tab for direct JSON editing
- Enable import/export functionality
- Add validation

## Tasks

### Raw Component
- [ ] `raws/Raw.tsx` + CSS
  - Large textarea showing JSON
  - Get data from StorageContext
  - Pretty-print JSON (JSON.stringify with indent)
  - Allow editing
  - Save button to update storage
  - Reset button to discard changes

### Functionality
- [ ] Load current entries as JSON string
- [ ] Parse edited JSON on save
- [ ] Validate JSON format
- [ ] Show error message if invalid JSON
- [ ] Update storage on successful save
- [ ] Preserve formatting (2-space indent)

### Validation
- [ ] Check valid JSON syntax
- [ ] Check array structure
- [ ] Check required fields (id, status, site)
- [ ] Show helpful error messages

## Completion Criteria
- [ ] Raw tab displays JSON correctly
- [ ] Can edit JSON directly
- [ ] Save updates storage
- [ ] Invalid JSON shows error
- [ ] Reset discards changes
- [ ] Changes sync with View tab

## Notes
[Space for implementation notes]
