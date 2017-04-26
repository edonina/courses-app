import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

	constructor (backend: XHRBackend, options: RequestOptions) {
		let token = localStorage.getItem('userToken');
		options.headers.set('Authorization', token);
		super(backend, options);
	}

	request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
		let token = localStorage.getItem('userToken');
		if (typeof url === 'string') {
			if (!options) {
				options = {headers: new Headers()};
			}
			options.headers.set('Authorization', token);
		} else {
			url.headers.set('Authorization', token);
		}
		return super.request(url, options).catch(this.catchError(this));
	}

	private catchError (self: HttpService) {
				return (res: Response) => {
			console.log(res);
			if (res.status === 401 || res.status === 403) {
				console.log(res);
			}
			return Observable.throw(res);
		};
	}
}
