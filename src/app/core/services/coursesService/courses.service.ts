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
	public courseList: BehaviorSubject<Course[]>;
	public courseListV: BehaviorSubject<Course[]>;
	private courseListUrl: string = 'http://127.0.0.1:3004/courses';

	constructor(private myLimitByDate: LimitByDatePipe, private http: Http) {
		this.courseList = new BehaviorSubject([]);
		this.courseListV = new BehaviorSubject([]);
	}

	public getCourseItems(num = 0): any {
		let itemsNum = 10;
		let count = itemsNum;
		let start = itemsNum*num;
		let query = '?start='+start+'&count='+count;

		// get courses
		return this.http.get(this.courseListUrl+query)
			// make transformations
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
			})
			/*.map((itemsList) => {
				return  this.myLimitByDate.transform(itemsList);
			})*/
			.subscribe(r => {
				let courseListUpdated = this.courseListV.getValue().concat(r);
				this.courseListV.next(courseListUpdated);
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

	public loadMoreCourses(num){

		console.log('num2', num);

		this.getCourseItems(num);
		/*let courseListUpdated = this.courseListV.getValue().concat(additionalList);
		console.log('courseListUpdated', courseListUpdated);
		this.courseListV.next(courseListUpdated);*/
	}
}
