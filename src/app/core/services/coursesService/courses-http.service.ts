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
				courseItems = [
					{
						id: 0,
						title: 'How to learn Angular 2 in few hours',
						description: 'We all wanna get something without any effort, so forget about few hours, it will take you for ages.',
						creationDate: new Date('11.03.2017'),
						duration: 167
					},
					{
						id: 1,
						title: 'Yet another motivational video',
						description: `See videos, read tons of articles, how to do at least anything, but advice is the one: just get your ass off the sofa and start doing.`,
						creationDate: new Date('09.03.2017'),
						duration: 37
					},
					{
						id: 2,
						title: 'The truth',
						description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones.',
						creationDate: new Date('05.03.2017'),
						duration: 126
					}
				];
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
