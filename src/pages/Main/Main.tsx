import { useAppDispatch, useAppSelector } from "hooks/appHooks";
import React from "react";
import { getBooksAll } from "store/reducer/books/bookReducer";

export const Main: React.FC = () => {
  const store = useAppSelector(store => store.books)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const s = async () => {
      const result = await dispatch(getBooksAll({}));
      console.log(result);
    };

    s();
  }, []);
  console.log(store)
  return <div>Main</div>;
};
