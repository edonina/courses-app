import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class LoaderBlockService {
	private loaderUrl: string = 'http://private-4b671-exampleservice.apiary-mock.com/api/todos';
	public showLoader$: Observable<boolean>;
	private showLoaderChange: Subject<boolean>;

	constructor( private http: Http) {
		//this.showLoader = true;
		this.showLoaderChange = new Subject<boolean>(false);
		this.showLoader$ = this.showLoaderChange.asObservable();
		//this.showLoader$ = this.showLoaderChange.next(false);
	}

	show() {
		this.showLoaderChange.next(true);
		return this.showLoader$;
		console.log('showed');
		//this.showLoader$ = true;
		/*return this.http.get(this.loaderUrl)
			.map((response: Response) => response.json())
			.map((showLoader: boolean) => {
				// change return value structure here if you want
				return true;
			});*/



	}

	hide() {
		this.showLoaderChange.next(false);
		console.log('hided');
	}




}
