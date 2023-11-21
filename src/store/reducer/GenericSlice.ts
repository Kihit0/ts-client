import {
  PayloadAction,
  SerializedError,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  createSlice,
} from "@reduxjs/toolkit";

export interface IGenericState<T> {
  data?: T;
  status: "loading" | "finished" | "error";
  error?: string | null | undefined | SerializedError
}

export const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<IGenericState<T>>
>({
  name = "",
  initialState,
  reducers,
} : {
  name: string;
  initialState: IGenericState<T>;
  reducers: ValidateSliceCaseReducers<IGenericState<T>, Reducers>;
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      start(state: IGenericState<T>) {
        state.status = "loading";
      },
      success(state: IGenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = "finished";
      },
      ...reducers,
    },
  });
};
