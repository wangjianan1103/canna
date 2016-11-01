import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	// URL to web api
	private heroesUrl = 'app/heroes';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(public http: Http) {}

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
		.then(() => this.getHeroes());
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}

	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
			.put(url, JSON.stringify(hero), {headers: this.headers})
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}

	create(name: string): Promise<Hero> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	getHeroHttp(): void {
		let url = 'http://127.0.0.1:1103/channel/getChannel';
		let body = JSON.stringify({ name: '22' });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		options.url = url;
		this.http.post(url, body, options)
			.subscribe(res=>{
					console.log(res);
				},
				(err)=>console.log(err),
				()=>console.log("Done")
			);
		return null;
	}

	private extractData(res: Response) {
		let body = res.json();
		console.log(body);
		return body.data || { };
	}
	
	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}