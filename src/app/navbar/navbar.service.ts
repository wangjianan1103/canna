import {Injectable} from '@angular/core';
import {NavigationBar} from './navgation'
import {HttpService} from '../http/http.service';

@Injectable()
export class NavbarService {

    constructor(public httpService: HttpService) {}

    getChannel(): NavigationBar[] {
        let navigationBars: Array<NavigationBar> = new Array();
        let body = JSON.stringify({});
        this.httpService.post('channel/getChannel', body)
            .then(res => {
                let data = res.json();
                if (data.status == 0) {
                    let content = data.content;
                    for (let i = 0; i < content.length; i++) {
                        let channel = content[i];
                        let navigationBar = {
                            id: channel.id,
                            gid: channel.gid,
                            name: channel.name
                        };
                        navigationBars.push(navigationBar);
                    }
                } else {
                    alert(data.message);
                }
            })
            .catch(res => {
                console.error(res);
            });
        return navigationBars;
    }
}
