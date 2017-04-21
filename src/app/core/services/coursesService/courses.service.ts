import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
/*import {Rx} from 'rxjs/Rx';*/
import { Course } from '../../entities';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { LimitByDatePipe } from "../../pipes/limit-by-date.pipe";
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CoursesService {
	private courseListData: any;
	public courseList: Observable<Course[]>;
	//public courseList: Subject<Course[]>;
	public courseListV: BehaviorSubject<Course[]>;
	private courseListLimited: Course[];
	private courseListUrl: string = 'http://127.0.0.1:3004/courses?start=1&count=10';

	constructor(private myLimitByDate: LimitByDatePipe, private http: Http) {
		this.courseList = new BehaviorSubject([]);
		//this.courseList = new Subject([]);
		this.courseListV = new BehaviorSubject([]);
	}

	public getCourseItems():any {

		return this.courseList
			.switchMap((courseList) => this.http.get(this.courseListUrl))
			.map((res: Response) => res.json())
			.map(itemsList => {
				let i;
				let courseListData =[];
				for(i = 0; i < itemsList.length; i++){

					courseListData[i] = {
						id: itemsList[i]['id'],
						title: itemsList[i]['name'],
						description: itemsList[i]['description'],
						date: itemsList[i]['date'],
						duration: itemsList[i]['length'],
						topRated: itemsList[i]['isTopRated']
					}
				}
				return courseListData;
			});



	}

	public createCourse(course): Course | boolean {
		if (course.title) {
			course.id = this.getUserId();
			this.getCourseItems().push(course);
			return course;
		}
		return false;
	}

	public getUserId() {
		let i = this.getCourseItems().length;
		let courseId = this.courseList[i].id + 1;
		return courseId;
	}

	public getCourseItemById(id): any {
		return this.getCourseItems().find(course => course.id === id);
	}

	public updateCourseItemById(courseObj:Course, id) {
		return;
	}

	public removeCourseItemById(id): void {
		let listVal = this.getCourseItems();
		let courseArrayIndex = listVal.findIndex(course => course.id === id);
		listVal.splice(courseArrayIndex, 1);
		if (courseArrayIndex != -1) {
			//this.courseList.next(listVal);
		}
	}
}
