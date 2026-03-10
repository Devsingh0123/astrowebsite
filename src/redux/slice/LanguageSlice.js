import i18n from "@/i18n/i18n";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  language: localStorage.getItem("lang") || "en", // default language
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;             // Redux state update
      localStorage.setItem("lang", action.payload); // Browser me save
      i18n.changeLanguage(action.payload);         // i18next bhi sync ho jaye
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;