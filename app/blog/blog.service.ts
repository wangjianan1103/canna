import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import any = jasmine.any;

@Injectable()
export class BlogService {

    constructor(public httpService: HttpService) {
    }

    getBlog(id: string): Promise<any> {
        let body = JSON.stringify({blogGid: id});
        return this.httpService.post('index/getBillDetail', body)
            .then(res => res = res.json().content);
    }
}
