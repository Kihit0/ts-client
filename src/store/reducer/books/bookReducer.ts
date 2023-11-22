import { Api } from "api/api";
import { IGenericState } from "../GenericSlice";
import { getBooks } from "api/endpoints/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = Api;

export const getBooksAll = createAsyncThunk<any, any, { rejectValue: string }>(
  "book/get",
  async () => {
    const response = await new api(getBooks, "get").request();

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
  reducers: {
    addBook(state, action) {
      state.data = action.payload;
      state.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBooksAll.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "finished";
      })
      .addCase(getBooksAll.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { addBook } = booksReducer.actions;
