import {Injectable} from "@angular/core";
import {HttpService} from "../http/http.service";
import any = jasmine.any;

@Injectable()
export class HomeService {

    constructor(public httpService: HttpService) {
    }

    getBills(): Promise<any> {
        let body = JSON.stringify({channelGid: null});
        return this.httpService.post('index/getIndexInfo', body)
            .then(res => res = res.json().content);
    }

    getBlogInfo(channel: string, mark: string): Promise<any> {
        let body = JSON.stringify(
                {channelGid: channel, markGid: mark}
            );
        return this.httpService.post('index/getBlogInfo', body)
            .then(res => res = res.json().content);
    }

    getMarks(): Promise<any> {
        let body = JSON.stringify({});
        return this.httpService.post('mark/getMark', body)
            .then(res => res = res.json().content);
    }

    getChannelGroup(): Promise<any> {
        let body = JSON.stringify({});
        return this.httpService.post('channel/group', body)
            .then(res => res = res.json().content);
    }
}