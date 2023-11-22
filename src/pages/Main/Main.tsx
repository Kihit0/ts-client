import { useAppSelector } from "hooks/appHooks";
import React from "react";
import { getBooksAll } from "store/reducer/books/bookReducer";

export const Main: React.FC = () => {

  const books = useAppSelector(store => store.books)

  const s = async () => {
     await getBooksAll({});
  }

  React.useEffect(() => {
    s()
  }, [])
  console.log(books)
  return <div>Main</div>;
};
