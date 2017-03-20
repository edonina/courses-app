import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';

@Injectable()
export class CoursesService {
	private courseList: Course[];

	constructor() {
		this.courseList = [
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
	}

	public getCourseItems (): Course[] {
		return this.courseList;
	}

	public createCourse (course): Course {
		if(course.title ){
			course.id = this.setUserId();
			this.courseList.push(course);
			console.log(this.courseList);
		}
		return ;
	}

	public setUserId() {
		let i = this.courseList.length;
		let courseId = this.courseList[i].id++;
		while (this.getCourseItemById(courseId)) {
			courseId = this.courseList[i].id++;
		}
		return courseId;
	}

	public getCourseItemById (id): any {
		let courseArrayIndex = this.getArrayIndexOfCourse(id);
		if(courseArrayIndex != -1){
			return this.courseList[courseArrayIndex];
		}
		return false;
	}

	public updateCourseItemById (courseObj:Course, id) {

		return ;
	}
	public getArrayIndexOfCourse(id){
		let i = this.courseList.length;
		while (i--) {
			if (this.courseList[i].id === id) {
				return i;
			}
		}
		return -1;
	}

	public removeCourseItemById (id) {
		let courseArrayIndex = this.getArrayIndexOfCourse(id);

		if(courseArrayIndex != -1){
			this.courseList.splice(courseArrayIndex, 1);
		}
		return this.courseList;
	}





}
