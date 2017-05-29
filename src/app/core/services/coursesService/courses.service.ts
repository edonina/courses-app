import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
/*import {Rx} from 'rxjs/Rx';*/
import { Course } from '../../entities';
import { Response, Request, RequestOptions, RequestMethod, Http, Headers, URLSearchParams } from '@angular/http';
import { LimitByDatePipe } from "../../pipes/limit-by-date.pipe";
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CoursesService {
	private courseListData: any;
	public courseList: BehaviorSubject<Course[]>;
	public courseListV: BehaviorSubject<Course[]>;
	private courseListUrl: string = 'http://127.0.0.1:3004/courses';
	private courseDeleteUrl: string = 'http://127.0.0.1:3004/courses/delete';

	private listState: {};

	constructor(private myLimitByDate: LimitByDatePipe, private http: Http) {
		this.courseList = new BehaviorSubject([]);
		this.courseListV = new BehaviorSubject([]);
		this.listState = {
			itemsNum: 10,
			search: '',
			num: 0
		};
	}

	public getCourseItems(num = 0, amount = 10, search = ''): any {

		let start = amount*num;
		let query = '?start='+start+'&count='+amount;

		if(this.listState['search']){
			query = query + '&query='+this.listState['search'];
		}

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
				if (num == 0){
					this.courseListV.next(r);
				}else{
					let courseListUpdated = this.courseListV.getValue().concat(r);
					this.courseListV.next(courseListUpdated);
				}

			});
	}


	public getCourseItemById(id): any {
		return this.getCourseItems().find(course => course.id === id);
	}

	public updateCourseItemById(courseObj: Course, id) {
		return;
	}

	public findCourses(search){
		this.listState['search'] = search;
		this.getCourseItems(0, this.listState['amount'], this.listState['search']);
	}

	public removeCourseItemById(id): Subscription {
		let headers = new Headers({
			'Accept': 'application/json'
		});
		headers.append('Content-Type', 'text/plain')
		let options = new RequestOptions({ headers });

		return this.http.post( this.courseDeleteUrl, {id})
			.catch((error: any) => {
				console.log(error._body);
				return Observable.throw(error);
			})
			.map((res: Response) => res.json())
			.subscribe((r) =>{
				let amount = this.listState['num']*this.listState['amount'] + this.listState['amount']
				console.log('amount', amount);
				this.getCourseItems(0, amount, this.listState['search']);
			});
	}

	public loadMoreCourses(num) {
		this.listState['num'] = num;
		this.getCourseItems(this.listState['num']);
	}


	public createCourse(course): Course | boolean {
		if (course.title) {
			course.id = this.getCourseId();
			this.getCourseItems().push(course);
			return course;
		}
		return false;
	}

	public getCourseId() {
		let i = this.getCourseItems().length;
		let courseId = this.courseList[i].id + 1;
		return courseId;
	}
}
