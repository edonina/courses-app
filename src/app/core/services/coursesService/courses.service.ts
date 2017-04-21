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
	public courseListView: BehaviorSubject<Course[]>;
	private courseListLimited: Course[];
	private courseListUrl: string = 'http://127.0.0.1:3004/courses?start=1&count=10';

	constructor(private myLimitByDate: LimitByDatePipe, private http: Http) {
		this.courseList = new BehaviorSubject([]);
		//this.courseList = new Subject([]);
		this.courseListView = new BehaviorSubject([]);
		/*this.courseListData = [
			{
				id: 0,
				title: 'How to learn Angular 2 in few hours',
				description: 'We all wanna get something without any effort, so forget about few hours, it will take you for ages.',
				creationDate: new Date(2017, 3, 15),
				duration: 167,
				topRated: true
			},
			{
				id: 1,
				title: 'Yet another motivational video',
				description: `See videos, read tons of articles, how to do at least anything, but advice is the one: just get your ass off the sofa and start doing.`,
				creationDate: new Date(2017, 3, 7),
				duration: 37,
				topRated: false
			},
			{
				id: 2,
				title: 'The truth',
				description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 2 June',
				creationDate: new Date(2017, 5, 2),
				duration: 126,
				topRated: true
			},
			{
				id: 3,
				title: 'The truth',
				description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 3 April',
				creationDate: new Date(2017, 3, 3),
				duration: 126,
				topRated: true
			}
			,
			{
				id: 4,
				title: 'The truth',
				description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 3 April',
				creationDate: new Date(2017, 3, 4),
				duration: 126,
				topRated: true
			}
		];*/
	}

	public getCourseItems():any {
		console.log('-------');

		this.courseList
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
				console.log('hhh')
				console.log(courseListData)
				return courseListData;
			})
			/*.subscribe(res => {
				this.courseList.next(res);
				this.courseListView.next(res);
				console.log(res)})*/;

		/*this.courseList = this.http.get(this.courseListUrl)
			.map((response: Response) => response.json())
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
			}).switchMap();
*/


		console.log(this.courseList);
		//this.courseListLimited = this.myLimitByDate.transform(this.courseListData);
		//this.courseListLimited = this.courseListData;

		//this.courseList.next(this.courseListLimited);
		return this.courseList;
	}

	public createCourse(course): Course | boolean {
		if (course.title) {
			course.id = this.getUserId();
			this.courseList.getValue().push(course);
			return course;
		}
		return false;
	}

	public getUserId() {
		let i = this.courseList.getValue().length;
		let courseId = this.courseList[i].id + 1;
		return courseId;
	}

	public getCourseItemById(id): any {
		return this.courseList.getValue().find(course => course.id === id);
	}

	public updateCourseItemById(courseObj:Course, id) {
		return;
	}

	public removeCourseItemById(id): void {
		let listVal = this.courseList.getValue();
		let courseArrayIndex = listVal.findIndex(course => course.id === id);
		listVal.splice(courseArrayIndex, 1);
		if (courseArrayIndex != -1) {
			this.courseList.next(listVal);
		}
	}
}
