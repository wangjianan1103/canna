import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {HomeService} from "./home.service";
import {HttpService} from "../http/http.service";
import {Subscription} from "rxjs";

@Component({
    moduleId: module.id,
    selector: 'home_app',
    templateUrl: 'home.component.html',
    providers: [HomeService, HttpService]
})
export class HomeComponent implements OnInit, OnDestroy {
    bills: any[];
    articleList: any[];
    friendList: any[];
    markList: any[];
    channelList: any[];
    private sub : Subscription;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private homeService: HomeService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            channel = params;
            this.goBill(channel.id);
        });

        let channel = this.route.snapshot.params['id'];
        if (channel == null || channel == "undefined") {
            channel = this.route.snapshot.routeConfig.path;
        }

        this.homeService.getBills()
            .then(content => {
                if (content != null) {
                    let newArticleList = content['newArticleList'];
                    let friendshipLinkList = content['friendshipLinkList'];
                    this.articleList = newArticleList;
                    this.friendList = friendshipLinkList;
                }
            });

        this.homeService.getMarks()
            .then(content => {
                if (content != null) {
                    this.markList = content;
                }
            });
        this.homeService.getChannelGroup()
            .then(content => {
                if (content != null) {
                    this.channelList = content;
                }
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe(); //记得要取消订阅, 防止内存泄露
    }

    goBill(channel: string){
        console.info("channel: " + channel);
        this.homeService.getBlogInfo(channel, null)
            .then(content => {
                if (content != null) {
                    this.bills = [];
                    this.bills = content;
                }
            });
    }

    goMark(mark: string){
        if (mark == null || mark == "undefined") {
            mark = null;
        }
        this.homeService.getBlogInfo(null, mark)
            .then(content => {
                if (content != null) {
                    this.bills = [];
                    this.bills = content;
                }
            });
    }
}