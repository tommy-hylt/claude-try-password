# Sprint 3: Search Result Caching

## Goals
- Implement cache for search results
- Store in localStorage
- Invalidate on data changes

## Tasks

### Cache Structure
- [ ] Create `src/ai/searchCache.ts`

```typescript
interface SearchEntry {
  id: string;
  input: string;        // search query
  outputs: string[];    // AI matched site names
  time: Date;
}

interface SearchCache {
  entries: SearchEntry[];
  dataHash: string;     // hash of all site names
}
```

### Cache Functions
- [ ] `getCache(): SearchCache`
  - Load from localStorage key "searchCache"

- [ ] `saveCache(cache: SearchCache): void`
  - Save to localStorage

- [ ] `findInCache(query: string): string[] | null`
  - Return cached results if found

- [ ] `addToCache(query: string, results: string[]): void`
  - Add new entry to cache

- [ ] `invalidateCache(): void`
  - Clear cache when data changes

- [ ] `computeDataHash(siteNames: string[]): string`
  - Simple hash of site names (sorted + joined)

### Cache Invalidation
- [ ] Detect when site names change
  - Hook into storage updates
  - Compare current hash with cached hash
  - Clear cache if different

### Integration
- [ ] Check cache before API call
- [ ] If found, return cached results
- [ ] If not, call API and cache result

## Completion Criteria
- [ ] Cache stores search results
- [ ] Cache retrieval works
- [ ] Cache invalidates on data change
- [ ] Reduces API calls significantly
- [ ] Cache persists across sessions

## Notes
[Space for caching implementation notes]
