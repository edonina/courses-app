import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Course } from '../../entities';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { LimitByDatePipe } from "../../pipes/limit-by-date.pipe";
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CoursesService {
	private courseListData:any;
	public courseList:BehaviorSubject<Course[]>;
	public courseListView:BehaviorSubject<Course[]>;
	private courseListLimited:Course[];

	constructor(private limitByDatePipe:LimitByDatePipe, private http:Http) {
		this.courseList = new BehaviorSubject([]);
		this.courseListView = new BehaviorSubject([]);
		this.courseListData = [
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
		];
	}

	public getCourseItems():void {
		this.courseListData = this.courseListData.map(item => {
			console.log(item);
			return {
				id: item['id'],
				title: item['title'],
				description: item['description'],
				date: item['creationDate'],
				duration: item['duration'],
				topRated: item['topRated']
			}
		});

		this.courseListLimited = this.limitByDatePipe.transform(this.courseListData);

		this.courseList.next(this.courseListLimited);
	}

	public createCourse(course):Course | boolean {
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

	public getCourseItemById(id):any {
		return this.courseList.getValue().find(course => course.id === id);
	}

	public updateCourseItemById(courseObj:Course, id) {
		return;
	}

	public removeCourseItemById(id):void {
		let listVal = this.courseList.getValue();
		let courseArrayIndex = listVal.findIndex(course => course.id === id);
		listVal.splice(courseArrayIndex, 1);
		if (courseArrayIndex != -1) {
			this.courseList.next(listVal);
		}
	}
}
