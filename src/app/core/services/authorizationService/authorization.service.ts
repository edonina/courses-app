import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

const GUEST_NAME = 'Guest';


@Injectable()
export class AuthorizationService {
	private userInfo:{};
	private autificated: boolean;
	public userLogin$: Observable<string>;
	private userLoginChange: ReplaySubject<string>;

	private authLoginUrl: string = 'http://127.0.0.1:3004/auth/login';


	constructor( private http: Http) {
		this.userInfo = {
			id: 585507,
			login: 'Smurfik',
			admin: true,
			token: 'vm58mv45vm599,y54-v45w9vc9-vryc,o5y'
		};
		this.userLoginChange = new ReplaySubject<string>();
		this.userLogin$ = this.userLoginChange.asObservable().startWith(this.userInfo['login']);
		this.autificated = true;
	}

	public loginUser(credentials: any) {
		this.autificated = true;
		credentials = {
			login: 'Morales',
			password: 'id'
		}
		console.log('>>> ',credentials);

		this.userLoginChange.next(this.userInfo['login']);
		localStorage.setItem(this.userInfo['login'], this.userInfo['token']);

		return this.userLoginChange
			.switchMap((credentials) => this.http.post( this.authLoginUrl, credentials))
			.map((res: Response) => res.json())
			.map(token => {
				console.log('>>> ',token);
				return token;
			});



	}

	public logoutUser() {
		this.userLoginChange.next(GUEST_NAME);
		localStorage.removeItem(this.userInfo['login']);
		this.autificated = false;
	}

	public isAuthentificated() {
		return this.autificated;
	}

	public getUserInfo(): Observable<string> {
		return Observable.of(this.userInfo['login']);
	}
}
