import Axios, { AxiosRequestConfig } from "axios";

export class Client<T> {
    protected constructor() {
        this._data = {};
    }

    public static getInstance<U>() {
        if (!this._instance) {
            this._instance = new Client<U>();
        }

        return this._instance;
    }

  public getData(
    url: string,
    config?: AxiosRequestConfig,
    forceRefresh = false
  ): Promise<any> {
    if (forceRefresh || !this._data[url]) {
      return Axios.get(url, config).then((result: any) => {
        this._data[url] = Promise.resolve(result);
        return this._data[url];
      });
    }

    return this._data[url];
  }

    public updateData(url: string, data: any): Promise<any> {
        return Axios.put(url, data).then((result: any) => {
            return result;
        });
    }

    public createData(url: string, data: any): Promise<any> {
        return Axios.post(url, data).then((result: any) => {
            return result;
        });
    }

    public deleteData(url: string): Promise<any> {
        return Axios.delete(url).then((result: any) => {
            return result;
        });
    }

    public setAuthenticationClient = (token: string): void => {
        Axios.interceptors.request.use(
            async (config): Promise<AxiosRequestConfig> => {
                // eslint-disable-next-line no-param-reassign
                config.headers.Authorization = token;
                return config;
            }
        );
    };

    private static _instance: Client<any>;

    private _data: { [key: string]: Promise<T> };
}
