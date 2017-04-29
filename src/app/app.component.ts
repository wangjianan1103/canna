import {Component, OnInit} from '@angular/core';
import {Title}     from '@angular/platform-browser';

@Component({
    selector: 'app',
    templateUrl: './app.html'
})
export class AppComponent {
    public constructor(private titleService: Title) {
    }

    ngOnInit(): void {
        this.titleService.setTitle("佳楠的个人博客");
    }
}
