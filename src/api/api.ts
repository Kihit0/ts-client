import axios, { AxiosResponse } from "axios";

type TMethod = "post" | "get" | "put" | "delete";

interface IPayload {
  data?: object | object[];
  thunkApi?: any;
  id?: number;
}

export class Api {
  private readonly url: string;
  private readonly method: TMethod;
  private readonly payload: IPayload | undefined;

  constructor(url: string, method: TMethod, payload?: IPayload) {
    this.url = url;
    this.method = method;
    this.payload = payload;
    
  }

  public async request(): Promise<{data: object, status: number, statusText: string}> {

    const id = this.payload?.id !== undefined ? this.payload.id : "" 
    const baseRequest = {
      method: this.method,
      url: this.url + id
    };

    /* ==== EXTENSION FOR POST ==== */
    this.payload?.data &&
      Object.assign(baseRequest, { data: this.payload.data });

    /* === EXTENSION FOR HEADERS AUTHORIZATION ==== */
    this.payload?.thunkApi?.extra?.jwt &&
      Object.assign(baseRequest, {
        headers: {
          Authorization: `Bearer ${this.payload?.thunkApi.extra.jwt}`,
        },
      });

    const response: AxiosResponse = await axios(baseRequest);
    const {data, status, statusText} = response
    return {status, statusText, data};
  }
}

