import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, ReplaySubject, Subscription,BehaviorSubject } from 'rxjs';
import { Response, Request, RequestOptions, RequestMethod, Http, Headers, URLSearchParams } from '@angular/http';
import { HttpService } from './../httpService/http.service';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

const GUEST_NAME = 'Guest';


@Injectable()
export class AuthorizationService {
	private autificated: BehaviorSubject<any>;

	public userLogin$: Observable<string>;
	private userLoginChange: ReplaySubject<string>;

	private authLoginUrl: string = 'http://127.0.0.1:3004/auth/login';
	private authUserInfoUrl: string = 'http://127.0.0.1:3004/auth/userinfo';


	constructor(private http: HttpService) {
		this.userLoginChange = new ReplaySubject();
		this.userLogin$ = this.userLoginChange.asObservable().startWith('');
		this.autificated = new BehaviorSubject(false);
	}

	public loginUser(credentials: any) {

		let headers = new Headers({
			'Accept': 'application/json'
		});
		headers.append('Content-Type', 'text/plain')
		let options = new RequestOptions({ headers });
		let body = JSON.stringify(credentials);

		return this.http.post( this.authLoginUrl, credentials)
			.catch((error: any) => {
				console.log(error._body);
				return Observable.throw(error);
			})
			.map((res: Response) => res.json())
			.subscribe((r) =>{
				localStorage.setItem('userToken', r.token);
				this.getUserInfo();
			})
	}

	public logoutUser() {
		this.userLoginChange.next(GUEST_NAME);
		localStorage.removeItem('userToken');
		this.autificated.next(false);
	}

	public isAuthentificated() {
		return this.autificated;
	}

	public getUserInfo(): any {
		const token = localStorage.getItem('userToken');

		return this.http.post(this.authUserInfoUrl, token)
			.catch((error: any) => {
				return Observable.throw(error);
			})
			.map((response: Response) => response.json())
			.subscribe((response) => {
				this.userLoginChange.next(response.name.first);
				this.autificated.next(true);
			});
	}
}
