import { Api } from "./api";
import { getBooks } from "./endpoints/endpoints";

const api = Api;

const allBooks = new api(getBooks, "get")
  .request()

console.log(allBooks);

export { allBooks };
