# Sprint 5: Testing & Bug Fixes

## Goals
- Test AI integration
- Test caching
- Fix bugs
- Test edge cases

## Tasks

### AI Matching Tests
- [ ] "facebook.com" → matches "Facebook"
- [ ] "fb" → matches "Facebook"
- [ ] "gmail" → matches "Google Mail"
- [ ] "email" → matches email services
- [ ] "bank" → matches banking sites
- [ ] Old website names work

### Cache Tests
- [ ] First search calls API
- [ ] Repeat search uses cache
- [ ] Cache persists after refresh
- [ ] Cache invalidates when site added
- [ ] Cache invalidates when site deleted
- [ ] Cache invalidates when site renamed

### Error Handling Tests
- [ ] Wrong API key shows error
- [ ] Network offline shows error
- [ ] Slow API (timeout) shows error
- [ ] Rate limit shows error
- [ ] Basic search still works when AI fails

### Performance Tests
- [ ] Search results within 3 seconds
- [ ] Cached results instant
- [ ] No UI freezing
- [ ] Loading states clear

### Edge Cases
- [ ] Empty search query
- [ ] Very long search query
- [ ] Special characters in query
- [ ] No matching results
- [ ] All sites match query

## Completion Criteria
- [ ] All AI matching scenarios work
- [ ] Cache reduces API calls
- [ ] Errors handled gracefully
- [ ] Performance acceptable
- [ ] No bugs found

## Notes
[Space for test results and bug fixes]
