import axios, { Axios, AxiosResponse } from "axios";

export class HttpUtil {
  private _axios: Axios;

  constructor(baseURL: string) {
    this._axios = axios.create({
      baseURL: baseURL,
    });
  }

  public async getRequest<T>(): Promise<T> {
    const res: AxiosResponse = await this._axios.get<AxiosResponse<T>>("");
    return res.data;
  }

  public async postRequest<S, T>(requestBody: T): Promise<S> {
    const res: AxiosResponse = await this._axios.post<AxiosResponse<S>>(
      "",
      requestBody
    );
    return res.data;
  }
}
