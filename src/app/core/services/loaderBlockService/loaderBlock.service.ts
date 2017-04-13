import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class LoaderBlockService {
	private loaderUrl: string = 'http://private-4b671-exampleservice.apiary-mock.com/api/todos';
	public showLoader$: Observable<boolean>;
	private showLoaderChange: ReplaySubject<boolean>;

	constructor() {
		this.showLoaderChange = new ReplaySubject<boolean>();
		this.showLoader$ = this.showLoaderChange.asObservable();
	}

	show() {
		this.showLoaderChange.next(true);
		console.log('from service: showed');
	}

	hide() {
		this.showLoaderChange.next(false);
		console.log('from service: hided');
	}
}
