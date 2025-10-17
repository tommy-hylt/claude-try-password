# Planning Document - AI Matching (Sub-Project 2)

## Design Decisions

### AI Integration Strategy
- Call Grok API on search when user presses Enter
- Debounce to prevent too frequent calls
- Cache input + results in localStorage

### Search Result Mixing
- Top 5 AI results shown first (if available)
- Basic search results shown after
- Show error message if AI fails, but keep basic results

### Caching Strategy
```typescript
interface SearchEntry {
  id: string;
  input: string;        // search query
  outputs: string[];    // matched site names from AI
  time: Date;
}
```

**Cache Invalidation**:
- Clear cache when any site name changes in localStorage
- Store caches in localStorage key: "searchCache"

### Matching Types
1. **Fuzzy Matching**: "fb" → "Facebook", "gmail" → "Google Mail"
2. **Category Matching**: "email" → "Yahoo", "Google" etc
3. **Old Name Matching**: Handle renamed websites

## Implementation Phases

### Phase 1: Setup
- [ ] Copy code from 01-basic-webapp
- [ ] Set up .env for API key
- [ ] Research Grok API docs

### Phase 2: Basic AI Call
- [ ] Create service for Grok API call
- [ ] Use browser fetch (no external libs)
- [ ] Test with mock data first

### Phase 3: Integration
- [ ] Enhance SearchInput to call AI on Enter
- [ ] Mix AI results with basic search
- [ ] Show top 5 AI results first

### Phase 4: Caching
- [ ] Store search results in localStorage
- [ ] Check cache before API call
- [ ] Invalidate cache on site name changes

### Phase 5: Error Handling
- [ ] Handle API errors gracefully
- [ ] Show error message
- [ ] Fallback to basic search

### Phase 6: Testing
- [ ] Test various search queries
- [ ] Test offline behavior
- [ ] Test cache invalidation

## File Structure (New/Modified)

```
02-ai-matching/
├── src/
│   ├── ai/
│   │   ├── grokApi.ts           # API client
│   │   ├── searchCache.ts       # Cache management
│   │   └── mockGrok.ts          # Mock for testing
│   ├── searches/
│   │   └── SearchInput.tsx      # Enhanced with AI
│   └── (all other files from 01-basic-webapp)
└── .env                         # API credentials
```

## API Configuration

**Endpoint**: [TODO: Fill after research]
**Authentication**: [TODO: Fill after research]
**Request Format**:
```typescript
{
  query: string,           // user's search input
  siteNames: string[],     // all site names from storage
}
```

**Response Format**:
```typescript
{
  matches: string[],       // matched site names, ordered by relevance
}
```

## Testing Checklist
- [ ] "facebook.com" matches "Facebook"
- [ ] "fb" matches "Facebook"
- [ ] "email" matches email-related sites
- [ ] Cache works and reduces API calls
- [ ] Cache invalidates on data change
- [ ] Error shows message but keeps basic search
- [ ] Network timeout handled
- [ ] Offline mode works (basic search only)
