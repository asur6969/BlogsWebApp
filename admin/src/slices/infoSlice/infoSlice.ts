import { createSlice } from "@reduxjs/toolkit";

export interface InfoSliceFormat {
  info?: string | null;
}

const initialState: InfoSliceFormat = {
  info: null,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload || null;
    },
  },
  //   extraReducers: (builder) => {},
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
