import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';

@Injectable()
export class TodoService {

	private todoListUrl: string = 'http://private-4b671-exampleservice.apiary-mock.com/api/todos';

	constructor(private http: Http) {
	}

	public getTodoItems (): Observable<Course[]> {
		return this.http.get(this.todoListUrl)
			.map((response: Response) => response.json())
			.map((courseItems: Course[]) => {
				// change return value structure here if you want
				return courseItems;
			});
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
}
