import {combineReducers} from "@reduxjs/toolkit"
import { booksReducer } from "./books/bookReducer";
import { notificationReducer } from "./notification/notificationReducer";

export const rootReducer = combineReducers({
    books: booksReducer.reducer,
    notification: notificationReducer.reducer
});

