import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {ArticleService} from "./article.service";
import {HttpService} from "../http/http.service";

@Component({
    selector: 'article_app',
    templateUrl: 'article.component.html',
    providers: [ArticleService, HttpService]
})
export class ArticlesComponent implements OnInit {
    bills: any[];
    articleList: any[];
    friendList: any[];
    markList: any[];
    channelList: any[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private articleService: ArticleService) {
    }

    ngOnInit(): void {
        let channel = this.route.snapshot.params['id'];
        this.articleService.getBills()
            .then(content => {
                if (content != null) {
                    let newArticleList = content['newArticleList'];
                    let friendshipLinkList = content['friendshipLinkList'];
                    this.articleList = newArticleList;
                    this.friendList = friendshipLinkList;
                }
            });

        this.articleService.getBlogInfo(channel, null)
            .then(content => {
                if (content != null) {
                    this.bills = content;
                }
            });

        this.articleService.getMarks()
            .then(content => {
                if (content != null) {
                    this.markList = content;
                }
            });
        this.articleService.getChannelGroup()
            .then(content => {
                if (content != null) {
                    this.channelList = content;
                }
            });
    }
}