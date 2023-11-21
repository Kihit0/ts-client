import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "api/api";
import { getBooks } from "api/endpoints/endpoints";
import { AxiosResponse } from "axios";
import { IGenericState } from "store/reducer/GenericSlice";

const api = Api;

export const getBooksAll = createAsyncThunk<any, any, { rejectValue: string }>(
  "book/get",
  async () => {
    const response: AxiosResponse = await new api(getBooks, "get").request();

    if (response.status === 400) {
      const error = Object.assign(response, { errorMessage: "BAD REQUEST" });
      return error.errorMessage as string;
    }
    return response;
  }
);

export const booksReducer = createSlice({
  name: "books",
  initialState: { status: "loading" } as IGenericState<[]>,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAll.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getBooksAll.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getBooksAll.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
      });
  },
});

/* export const books = createGenericSlice({
  name: "books",
  initialState: { status: "loading" } as IGenericState<[]>,
  reducers: {
    magic(state: IGenericState<[]>) {
      state.status = "finished";
      state.date = [];
    },
  },
});
 */
