# Sprint 1: Setup & Grok API Research

## Goals
- Copy code from sub-project 01
- Research Grok API
- Set up environment variables
- Create mock AI service

## Tasks

### Project Setup
- [ ] Copy all files from `01-basic-webapp/` to `02-ai-matching/`
- [ ] `npm install` in new folder
- [ ] Test that app runs: `npm run dev`
- [ ] Verify all sub-project 01 features still work

### Grok API Research
- [ ] Find Grok API documentation
- [ ] Understand authentication method
- [ ] Check request/response format
- [ ] Note rate limits and pricing
- [ ] Create API account (if needed)
- [ ] Get API key

**Research Notes**:
- API Endpoint: [TODO]
- Auth Method: [TODO]
- Request Format: [TODO]
- Response Format: [TODO]
- Rate Limits: [TODO]

### Environment Setup
- [ ] Create `.env` file
```env
VITE_GROK_API_KEY=your_key_here
VITE_GROK_API_ENDPOINT=https://...
```
- [ ] Add `.env` to `.gitignore`
- [ ] Create `.env.example` template

### Create Mock Service
- [ ] `src/ai/mockGrok.ts`
  - Mock API that returns fake matches
  - For testing without real API calls
  - Returns matches based on simple logic

## Completion Criteria
- [ ] Sub-project 02 set up and running
- [ ] Grok API researched and documented
- [ ] Environment variables configured
- [ ] Mock service created for testing
- [ ] All sub-project 01 features still work

## Notes
[Space for API research notes]
