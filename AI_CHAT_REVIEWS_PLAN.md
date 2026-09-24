# AI chat ratings and reviews implementation plan

## Scope and flow
- Add a Rate astrologer action for logged-in users with an established chat session.
- Also open the review form after the user successfully ends a chat using End Chat. Capture the session before closing, since the Redux close action clears it. Navigation away remains unchanged.
- Show the astrologer name, a required 1–5 star rating, and a required written review (trimmed, maximum 1,000 characters).
- Use the existing Radix dialog for keyboard navigation, focus management, and dismissal. Allow skipping; block repeated submission while pending and show recoverable errors.
- Bind the form to a snapshot of the route astrologer slug, expertise slug, and session ID. Reset it when changing astrologers so reviews cannot target the next astrologer accidentally.

## Review submission API
- Use Redux Toolkit `submitAiAstrologerReview` in `src/redux/slice/aiAstrologerReviewSlice.js` and the shared authenticated Axios `api` client.
- POST JSON to `https://astro.astrotring.com/api/user/astrologer/review` using the shared Axios base URL and `/user/astrologer/review` path.
- Send exactly `{ astrologer_id, rating, review }`. Trim review text. Obtain the ID from the fetched astrologer profile only when its slug matches the current route. The slug remains UI context and is not submitted. Disable review submission until the correct profile is available.
- Keep session ID and expertise slug in the UI only for dialog identity and in-page duplicate prevention; do not send either to the API.
- Store submission loading/error state in the registered `aiAstrologerReview` Redux slice. Dispatch the thunk and use `.unwrap()` so only successful responses close the form and show confirmation.
- Keep client validation, pending submission protection, and existing authentication/interceptor conventions. Do not change public rating totals locally.

## Authentication and remaining endpoints
The thunk uses `{ getState, rejectWithValue }`, reads `token` and `isLoggedIn` from `getState().userAuth`, and rejects unauthenticated submissions. The shared Axios interceptor attaches authentication and preserves the explicit JSON Content-Type. The slice manages loading/error state; the dialog handles validation, trimming, and repeated-click protection. HTTP errors and responses with `status: false` are treated as failures. The all-reviews and reviews-by-slug GET routes remain placeholders until their real endpoints are supplied.

## Verification
- Run the production build and targeted lint checks; distinguish existing lint findings.
- Verify the submission contains only the three agreed fields, and that HTTP/backend errors preserve the form for retry.
- Browser checklist: star selection by keyboard, empty/whitespace review, length limit, pending submission, skip/reopen, success, End Chat success/failure, and switching astrologers. Confirm submitted session stays the original one after close.
