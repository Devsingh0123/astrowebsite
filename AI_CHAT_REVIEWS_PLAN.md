# AI chat ratings and reviews implementation plan

## Scope and flow
- Add a Rate astrologer action for logged-in users with an established chat session.
- Also open the review form after the user successfully ends a chat using End Chat. Capture the session before closing, since the Redux close action clears it. Navigation away remains unchanged.
- Show the astrologer name, a required 1–5 star rating, and a required written review (trimmed, maximum 1,000 characters).
- Use the existing Radix dialog for keyboard navigation, focus management, and dismissal. Allow skipping; block repeated submission while pending and show recoverable errors.
- Bind the form to a snapshot of the route astrologer slug, expertise slug, and session ID. Reset it when changing astrologers so reviews cannot target the next astrologer accidentally.

## Placeholder API endpoint
- Use Redux Toolkit `submitAiAstrologerReview` in `src/redux/slice/aiAstrologerReviewSlice.js` and the shared authenticated Axios `api` client.
- POST to `/user/ai-astrologer-reviews` (placeholder path under the existing API base URL). This sends an actual request; no mock function or simulated success remains. Until the backend implements this route, requests may fail and the form displays an error with retry available.
- Send exactly `{ astrologer_id, slug, review, rating }`. Trim review text. Obtain the ID from the fetched astrologer profile only when its slug matches the current route. Disable review submission until the correct profile is available.
- Keep session ID and expertise slug in the UI only for dialog identity and in-page duplicate prevention; do not send either to the API.
- Store submission loading/error state in the registered `aiAstrologerReview` Redux slice. Dispatch the thunk and use `.unwrap()` so only successful responses close the form and show confirmation.
- Keep client validation, pending submission protection, and existing authentication/interceptor conventions. Do not change public rating totals locally.

## Backend replacement
Update the `api.post` endpoint in the review slice once the final route is confirmed. The thunk destructures `{ getState, rejectWithValue }` in its async function parameter, reads `token` and `isLoggedIn` from `getState().userAuth`, and rejects unauthenticated submissions before sending a request. It supplies the Redux token as the Authorization header; the shared Axios interceptor preserves explicitly supplied authorization and uses local storage as its fallback. The slice keeps `loading`/`error` state managed by pending/fulfilled/rejected reducers. Form validation, trimming, and repeated-click protection stay in the dialog. The request body has only the four agreed fields above. The backend should derive user identity from authentication, validate astrologer ID/slug association and rating/review limits, and enforce the agreed duplicate policy. HTTP errors and responses with `status: false` are treated as failures.

## Verification
- Run the production build and targeted lint checks; distinguish existing lint findings.
- Verify the request contains only the four agreed fields, and that HTTP/backend errors preserve the form for retry.
- Browser checklist: star selection by keyboard, empty/whitespace review, length limit, pending submission, skip/reopen, success, End Chat success/failure, and switching astrologers. Confirm submitted session stays the original one after close.
