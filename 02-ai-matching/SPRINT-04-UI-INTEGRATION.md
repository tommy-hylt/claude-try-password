# Sprint 4: UI Integration

## Goals
- Enhance SearchInput with AI
- Mix AI and basic search results
- Add loading states and error handling

## Tasks

### Enhance SearchInput Component
- [ ] Update `searches/SearchInput.tsx`

### Add State
```typescript
const [isLoading, setIsLoading] = useState(false);
const [aiError, setAiError] = useState<string | null>(null);
const [aiResults, setAiResults] = useState<string[]>([]);
```

### AI Call on Enter
- [ ] Listen for Enter key press
- [ ] Get all site names from storage
- [ ] Check cache first
- [ ] If not cached, call Grok API
- [ ] Set loading state during call
- [ ] Handle success and errors
- [ ] Update aiResults state

### Debouncing
- [ ] Don't call AI on every keystroke
- [ ] Only on Enter key press
- [ ] Or debounce with 500ms delay

### Result Mixing
- [ ] Update SearchProvider/SearchContext
- [ ] Mix results:
  1. Top 5 AI results (if available)
  2. Basic search results (excluding AI results)
- [ ] Remove duplicates
- [ ] Maintain order

### UI Updates
- [ ] Show loading spinner during AI call
- [ ] Show error message if AI fails
- [ ] Keep basic search working even if AI fails
- [ ] Optional: Show badge "AI" on AI-matched results

### Error Messages
- [ ] Network error: "AI search unavailable, showing basic results"
- [ ] Rate limit: "Too many requests, showing basic results"
- [ ] General error: "AI search failed, showing basic results"

## Completion Criteria
- [ ] Enter key triggers AI search
- [ ] Loading state shows during API call
- [ ] AI results appear at top
- [ ] Basic results still work
- [ ] Errors handled gracefully
- [ ] No UI blocking

## Notes
[Space for UI integration notes]
