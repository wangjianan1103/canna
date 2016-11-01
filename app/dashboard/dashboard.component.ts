import {Component, OnInit} from '@angular/core';
import {Hero} from '../heroes/hero';
import {HeroService} from '../heroes/hero.service';
import {Router} from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private router: Router,
                private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
