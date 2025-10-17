# Sub-Project 2: AI-Powered Matching with Grok

## Overview
This phase enhances the basic password manager with intelligent site name matching using Grok AI. Instead of relying on exact string matching, the application will use AI to understand context and match similar or related site names.

## Objectives
- [ ] Integrate Grok API for intelligent site name matching
- [ ] On each search, we will provide AI with the current search text and all site names
- [ ] AI should response us the matched site names
- [ ] No need to be exact match. But AI should order the names by how much they matched
- [ ] Storage search results into localStorage. This should save AI cost
- [ ] Invalidate search results if any site name in localStorage is changed

## Prerequisites
**Complete Sub-Project 1** before starting this phase. This builds on the basic web app foundation.

## Technical Requirements

### Additional Dependencies
- Use browser's default `fetch` for HTTP call
- Use SDK if needed
- Environment variable management for API keys

### Grok API Setup
**API Endpoint**: [TODO: Research and fill in Grok API endpoint]
- Documentation: [TODO: Add Grok API docs link]
- Authentication: [TODO: API key / OAuth / etc.]
- Rate Limits: [TODO: Document rate limits]
- Pricing: [TODO: Document pricing structure]

## Features to Implement

### 1. Fuzzy Matching
Example scenarios:
- User searches "facebook.com" → Matches "Facebook" entry
- User searches "fb" → Matches "Facebook" entry
- User searches "gmail" → Matches "Google Mail" entry
- User searches "amazon shopping" → Matches "Amazon" entry

### 2. Category Matching
- Use searches "email" → Matches "Yahoo", "Gooogle" etc
- Use searches "bank" → Matches "HSBC", "ZA Bank" etc

### 3. Old Name Matching
Some websites may have renamed. Ask AI to match old name as well.

## Implementation Approach

- Call Grok API on every search when user press enter
- Implement debouncing (prevent firing too frequently)
- Cache input and results for repeated searches

## Data Structure Updates

### Search Entry
```typescript
interface SearchEntry {
  id: string;
  input: string;
  outputs: string[];
  time: Date;
}
```

## Environment Variables

- Create `.env` file (DO NOT commit this file).
- Will be replaced by real `.env` in production

## Mixed Results

- Basic search results are also used
- Top 5 results from AI are of highest rank in displaying
- Others are ordered in the same order as in localStorage
- When AI report error, so error message, but keep basic search results

## Testing Plan
- [ ] Test with various site name variations
- [ ] Test API error scenarios
- [ ] Test with slow network
- [ ] Test with no network (offline)
- [ ] Test rate limiting behavior
- [ ] Mock AI responses for development

## Success Criteria
- [ ] AI successfully matches common variations (e.g., "fb" → "Facebook")
- [ ] Search results returned within 3s (including API call)
- [ ] Graceful fallback when AI unavailable
- [ ] User experience is smooth with loading indicators

## Migration from Sub-Project 1
### Steps to integrate AI features:
1. [ ] Use `01-basic-webapp` a local dependency
2. [ ] Enhance search components with AI
3. [ ] Test integration thoroughly, but mock AI call

## Next Steps
After completing this phase, the application will be converted to a PWA and deployed to GitHub Pages in sub-project 3 (TBC).
