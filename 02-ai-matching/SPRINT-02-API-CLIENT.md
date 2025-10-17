# Sprint 2: Grok API Client

## Goals
- Implement Grok API client
- Handle authentication
- Test with real API

## Tasks

### API Client
- [ ] Create `src/ai/grokApi.ts`

```typescript
// API request interface
interface MatchRequest {
  query: string;
  siteNames: string[];
}

// API response interface
interface MatchResponse {
  matches: string[];  // ordered by relevance
}

// Main API function
async function getMatches(
  query: string,
  siteNames: string[]
): Promise<string[]>
```

### Implementation
- [ ] Use browser `fetch` API (no external libs)
- [ ] Add API key from environment
- [ ] Build request payload
- [ ] Parse response
- [ ] Return matched site names
- [ ] Handle errors (throw or return empty array)

### Error Handling
- [ ] Network errors
- [ ] Invalid API key
- [ ] Rate limit errors
- [ ] Timeout (5 seconds)
- [ ] Invalid response format

### Testing
- [ ] Test with real API key
- [ ] Test various queries:
  - "fb" should match "Facebook"
  - "email" should match email services
  - "bank" should match banking sites
- [ ] Test error scenarios
- [ ] Log requests/responses for debugging

## Completion Criteria
- [ ] API client function works
- [ ] Returns matched site names
- [ ] Handles errors gracefully
- [ ] Tested with real API
- [ ] Code is clean and typed

## Notes
[Space for API integration notes and issues]
