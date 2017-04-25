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
	private userInfo:{};
	private autificated: BehaviorSubject<any>;

	public userLogin$: Observable<string>;
	public autificated$: Observable<boolean>;

	private userLoginChange: ReplaySubject<string>;
	private autificatedChange: ReplaySubject<boolean>;

	private authLoginUrl: string = 'http://127.0.0.1:3004/auth/login';
	private authUserInfoUrl: string = 'http://127.0.0.1:3004/auth/userinfo';


	constructor( private http: HttpService) {
		this.userInfo = {
			/*id: 585507,
			login: 'Smurfik',
			admin: true,
			token: 'vm58mv45vm599,y54-v45w9vc9-vryc,o5y'*/
		};
		this.userLoginChange = new ReplaySubject();
		this.userLogin$ = this.userLoginChange.asObservable().startWith('');
		this.autificatedChange	= new ReplaySubject();
		this.autificated$ = this.autificatedChange.asObservable().startWith(false);
		this.autificated = new BehaviorSubject(false);


	}

	public loginUser(credentials: any) {
		credentials = {
			login:'Warner',
			password:'ea'
		};
		this.userInfo ={
			login:'Warner',
			password:'ea'
		}

		let headers = new Headers({
			'Accept': 'application/json'
		});
		headers.append('Content-Type', 'text/plain')
		let options = new RequestOptions({ headers: headers });

		let body = JSON.stringify(credentials);

		return this.http.post( this.authLoginUrl, credentials)
			.catch((error: any) => {
				console.log(error._body);
				return Observable.throw(error);
			})
			.map((res: Response) => res.json())
			.map((token) => {

				//this.userInfo['token'] = token;
				this.userInfo['token'] = token.token;
				localStorage.setItem('userToken', token.token);
				return token;
			}).subscribe((r) =>{
				this.getUserInfo();
			})
	}

	public logoutUser() {
		this.userLoginChange.next(GUEST_NAME);
		localStorage.removeItem(this.userInfo['login']);
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
