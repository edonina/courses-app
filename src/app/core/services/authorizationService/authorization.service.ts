import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';

import 'rxjs/add/operator/map';

const GUEST_NAME = 'Guest';


@Injectable()
export class AuthorizationService {
	private userInfo:{};
	private autificated: boolean;
	public userLogin$: Observable<string>;
	private userLoginChange: ReplaySubject<string>;


	constructor() {
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

	public loginUser() {
		this.autificated = true;
		this.userLoginChange.next(this.userInfo['login']);
		localStorage.setItem(this.userInfo['login'], this.userInfo['token']);
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
