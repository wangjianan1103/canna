import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {HomeService} from "../home.service";
import {HttpService} from "../../http/http.service";

@Component({
    selector: 'home_article',
    templateUrl: 'article.component.html',
    providers: [HomeService, HttpService]
})
export class ArticleComponent implements OnInit {
    bills: any[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private homeService: HomeService) {
    }

    ngOnInit(): void {
        let channel = this.route.snapshot.params['id'];
        this.homeService.getBlogInfo(channel, null)
            .then(content => {
                if (content != null) {
                    this.bills = content;
                }
            });
    }
}