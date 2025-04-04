import { TQuote } from "@/store/types/HI/TQuote";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TQuote = {
  quote_id: "",
  navigateToBreakupScreen: false,
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuoteId: (state: TQuote, action: PayloadAction<string>) => {
      state.quote_id = action.payload;
    },
    setNavigateToBreakup: (state: TQuote, action: PayloadAction<boolean>) => {
      state.navigateToBreakupScreen = action.payload;
    },
    resetQuoteState: (state: TQuote, action: PayloadAction<any>) => {
      return initialState;
    },
  },
});

export const { setQuoteId, setNavigateToBreakup, resetQuoteState } =
  quoteSlice.actions;

export default quoteSlice.reducer;
