import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    private path = 'http://127.0.0.1:1103/';
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(public http: Http) {
    }

    public post = function (url: string, body: string): Promise<any> {
        let postUrl = this.path + url;
        return this.http.post(postUrl, body, this.options)
            .toPromise()
            .then(res => res);
    };
}