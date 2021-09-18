import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LayoutState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: LayoutState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const counterSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isLoaded: (state) => {
      state.isLoading = false;
    },
    isError: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    resetError: (state) => {
      state.isError = false;
      state.errorMessage = "";
    },
  },
});

export const { ...layoutAction } = counterSlice.actions;
export const isLoadingSelector = (state: RootState) => state.layout.isLoading;
export const errorSelector = (state: RootState) => {
  const { isError, errorMessage } = state.layout;
  return {
    isError,
    errorMessage,
  };
};
export default counterSlice.reducer;
