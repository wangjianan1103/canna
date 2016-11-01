import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {BlogService} from "./blog.service";
import {HttpService} from "../http/http.service";

@Component({
    moduleId: module.id,
    selector: 'blog',
    templateUrl: 'blog.component.html',
    providers: [BlogService, HttpService]
})
export class BlogComponent implements OnInit {
    blog = {};

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private blogService: BlogService) {
    }

    ngOnInit(): void {
        this.blogService.getBlog(this.route.snapshot.params['id'])
            .then(content => {
                this.blog = content;
            });
    }

    goBack(): void {
        this.location.back();
    }
}