import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

    
@Injectable({
    providedIn: 'root'
})
export class ManagerServices {

    constructor(public _http: HttpClient) { }

    get(url: string): Observable<any> {
        return this._http.get(url);
    }

    post(url: string, body: any, params?: any, headers: any = {}, responseType: any = null): Observable<any> {
        const options = {};

        if (headers != null) { Object.assign(options, {headers: new HttpHeaders(headers)}); }
        if (params != null) { Object.assign(options, {params: params}); }
        if (responseType != null) {Object.assign(options, responseType); }
        console.log(options)
        return options ? this._http.post(url, body, options) : this._http.put(url, body);
    }
}