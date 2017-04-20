/*
import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';

@Injectable()
export class CoursesService {

	private courseListUrl: string = 'http://private-4b671-exampleservice.apiary-mock.com/api/todos';

	constructor(private http: Http) {
	}

	public getCourseItems (): Observable<Course[]> {
		return this.http.get(this.courseListUrl)
			.map((response: Response) => response.json())
			.map((courseItems: Course[]) => {
				// change return value structure here if you want
				courseItems = [];
				return courseItems;
			});
	}

	public createCourse (): Observable<Course[]> {
		return ;
	}

	public getCourseItemById (id): Course.id {
		return ;
	}

	public updateCourseItemById (): Course {
		return ;
	}

	public removeCourseItemById (): Course {
		return ;
	}




	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
}

*/
