import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../baseApi";

export const submitAiAstrologerReview = createAsyncThunk(
  "aiAstrologerReview/submit",
  async ({ astrologer_id, slug, review, rating }, { getState, rejectWithValue }) => {
    const { token, isLoggedIn } = getState().userAuth;

    if (!isLoggedIn || !token) {
      return rejectWithValue("Please log in to submit a review.");
    }

    try {
      // Placeholder endpoint: replace when the backend API is ready.
      const res = await api.post(
        "/user/ai-astrologer-reviews",
        { astrologer_id, slug, review, rating }
        
      );
      if (res.data?.status === false) {
        return rejectWithValue(res.data.message || "Review submission failed");
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Review submission failed",
      );
    }
  },
);

export const fetchAllAiAstrologerReviews = createAsyncThunk(
  "aiAstrologerReview/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      // Placeholder endpoint: replace when the backend API is ready.
      const res = await api.get("/user/ai-astrologer-reviews");
      if (res.data?.status === false) {
        return rejectWithValue(res.data.message || "Failed to load reviews");
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to load reviews");
    }
  },
);

export const fetchAiAstrologerReviewsBySlug = createAsyncThunk(
  "aiAstrologerReview/fetchBySlug",
  async (slug, { rejectWithValue }) => {
    if (typeof slug !== "string" || !slug.trim()) {
      return rejectWithValue("Astrologer slug is required.");
    }

    try {
      // Dynamic placeholder route for a particular astrologer's reviews.
      const res = await api.get(`/user/ai-astrologer-reviews/${encodeURIComponent(slug.trim())}`);
      if (res.data?.status === false) {
        return rejectWithValue(res.data.message || "Failed to load astrologer reviews");
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to load astrologer reviews");
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  allReviews: null,
  allReviewsLoading: false,
  allReviewsError: null,
  astrologerReviews: null,
  astrologerReviewsSlug: null,
  astrologerReviewsLoading: false,
  astrologerReviewsError: null,
  astrologerReviewsRequestId: null,
};

const aiAstrologerReviewSlice = createSlice({
  name: "aiAstrologerReview",
  initialState,
  reducers: {
    clearReviewError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAiAstrologerReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitAiAstrologerReview.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitAiAstrologerReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllAiAstrologerReviews.pending, (state) => {
        state.allReviewsLoading = true;
        state.allReviewsError = null;
      })
      .addCase(fetchAllAiAstrologerReviews.fulfilled, (state, action) => {
        state.allReviewsLoading = false;
        state.allReviews = action.payload;
      })
      .addCase(fetchAllAiAstrologerReviews.rejected, (state, action) => {
        state.allReviewsLoading = false;
        state.allReviewsError = action.payload || action.error.message;
      })
      .addCase(fetchAiAstrologerReviewsBySlug.pending, (state, action) => {
        state.astrologerReviewsSlug = action.meta.arg;
        state.astrologerReviewsLoading = true;
        state.astrologerReviewsError = null;
        state.astrologerReviews = null;
        state.astrologerReviewsRequestId = action.meta.requestId;
      })
      .addCase(fetchAiAstrologerReviewsBySlug.fulfilled, (state, action) => {
        // Ignore an older response after switching astrologers.
        if (state.astrologerReviewsRequestId !== action.meta.requestId) return;
        state.astrologerReviewsLoading = false;
        state.astrologerReviews = action.payload;
        state.astrologerReviewsRequestId = null;
      })
      .addCase(fetchAiAstrologerReviewsBySlug.rejected, (state, action) => {
        if (state.astrologerReviewsRequestId !== action.meta.requestId) return;
        state.astrologerReviewsLoading = false;
        state.astrologerReviewsError = action.payload || action.error.message;
        state.astrologerReviewsRequestId = null;
      });
  },
});

export const { clearReviewError } = aiAstrologerReviewSlice.actions;
export default aiAstrologerReviewSlice.reducer;
