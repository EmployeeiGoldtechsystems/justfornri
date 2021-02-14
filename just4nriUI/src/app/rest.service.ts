import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }


  /**
   * @ngdoc method
   * @name $RestClientService#callService
   * @description Calls a remote REST service
   * @param {string=}  method the httpMethod for invoking the service
   * @param {string=} path the path following the domain without the leading /
   * @param {} jsonBody body of the request
   * @param {Map<string, any>} options like responseType can be set using this
   * @returns {*} the response from the service
   */
  public callService<returnType>(method: string, path: string
    , jsonBody?: any
    , options?: Map<string, any>
    , headers?: Map<string, string>) {
    const fullUrl = 'http://localhost:8080/' + path;
    const opts: any = {
      headers: new HttpHeaders({})
    };
    if (options) {
      options.forEach((key, value) => {
        opts[key] = value;
      });
    }

    const hs: HttpHeaders = new HttpHeaders();
    if (headers) {
      if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
      }

      headers.forEach((key, value) => {
        hs.set(key, value);
      });

      // ToDo: headers are immutable. Hence the below might not work. Have to fix
      opts.headers = hs;

    }

    switch (method) {
      case 'GET':
        return this.httpClient.get<returnType>(fullUrl, opts);
      case 'POST':
        return this.httpClient.post<returnType>(fullUrl, jsonBody, opts);
      case 'PUT':
        return this.httpClient.put<returnType>(fullUrl, jsonBody, opts);
      case 'DELETE':
        return this.httpClient.delete<returnType>(fullUrl, opts);
    }

    return null;
  }
}
