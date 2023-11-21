import {combineReducers} from "@reduxjs/toolkit"
import { booksReducer } from "./books/bookReducer";

export const rootReducer = combineReducers({books: booksReducer.reducer});

