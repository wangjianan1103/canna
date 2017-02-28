import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NavigationBar} from './navgation'
import {NavbarService} from './navbar.service';
import {HttpService} from '../http/http.service';

@Component({
    selector: 'navigation_bar',
    templateUrl: 'navigation_bar.html',
    providers: [NavbarService, HttpService]
})

export class NavbarComponent implements OnInit {
    navigationBars: NavigationBar[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private navbarService: NavbarService) {
    }

    ngOnInit(): void {
        this.navigationBars = this.navbarService.getChannel();
    }

}