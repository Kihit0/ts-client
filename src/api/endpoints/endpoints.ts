interface IQuery{
    id?: number;
    query?: string
}

/* ==== BASE ==== */
const baseUrl = "http://localhost:8089/api/";

/* ==== BOOK ==== */
export const getBooks = `${baseUrl}book`
export const getBook = (query: IQuery) => `${baseUrl}book/${query.id}`
