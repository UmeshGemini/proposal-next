import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TPageStatus {
  PAGE_STATUS: boolean;
}

const initialState: TPageStatus = {
  PAGE_STATUS: false,
};

export const pageSlice = createSlice({
  name: "PAGE_SLICE",
  initialState,
  reducers: {
    UPDATE_PAGE_STATUS: (
      state: TPageStatus,
      action: PayloadAction<boolean>
    ) => {
      state.PAGE_STATUS = action.payload;
    },
  },
});

export const { UPDATE_PAGE_STATUS } = pageSlice.actions;

export default pageSlice.reducer;
