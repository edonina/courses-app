import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';
import { Observable } from 'rxjs';


@Injectable()
export class CoursesService {
	private courseList:Course[];

	constructor() {
		this.courseList = [
			{
				id: 0,
				title: 'How to learn Angular 2 in few hours',
				description: 'We all wanna get something without any effort, so forget about few hours, it will take you for ages.',
				creationDate: new Date(2017, 1, 15),
				duration: 167,
				topRated: true
			},
			{
				id: 1,
				title: 'Yet another motivational video',
				description: `See videos, read tons of articles, how to do at least anything, but advice is the one: just get your ass off the sofa and start doing.`,
				creationDate: new Date(2017, 2, 27),
				duration: 37,
				topRated: false
			},
			{
				id: 2,
				title: 'The truth',
				description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones.',
				creationDate: new Date(2017, 5, 2),
				duration: 126,
				topRated: true
			}
		];
		//this.courseList = [];
	}

	public getCourseItems(): Observable<Course[]> {
		return Observable.of(this.courseList);
	}

	public createCourse(course):Course | boolean {
		if (course.title) {
			course.id = this.getUserId();
			this.courseList.push(course);
			return course;
		}
		return false;
	}

	public getUserId() {
		let i = this.courseList.length;
		let courseId = this.courseList[i].id + 1;
		return courseId;
	}

	public getCourseItemById(id):any {
		return this.courseList.find(course => course.id === id);
	}

	public updateCourseItemById(courseObj:Course, id) {
		return;
	}

	public removeCourseItemById(id) {
		let courseArrayIndex = this.courseList.findIndex(course => course.id === id);

		if (courseArrayIndex != -1) {
			this.courseList.splice(courseArrayIndex, 1);
		}
		return this.courseList;
	}


}
