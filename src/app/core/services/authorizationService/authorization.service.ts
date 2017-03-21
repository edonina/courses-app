import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';

@Injectable()
export class AuthorizationService {
	private userInfo:{};
	private autificated: boolean;


	constructor() {
		this.userInfo = {
			id: 585507,
			login: 'Smurfik',
			admin: true,
			token: 'vm58mv45vm599,y54-v45w9vc9-vryc,o5y'
		};
		this.autificated = true;
	}

	public loginUser() {
		console.log('login');
		this.autificated = true;
		localStorage.setItem(this.userInfo['login'], this.userInfo['token']);
	}

	public logoutUser() {
		console.log('logout');
		localStorage.removeItem(this.userInfo['login']);
		this.autificated = false;
	}

	public isAuthentificated() {
		return this.autificated;
	}

	public getUserInfo(): any {
		if(this.isAuthentificated()){
			return this.userInfo['login'];
		}
		return false;
	}
}
