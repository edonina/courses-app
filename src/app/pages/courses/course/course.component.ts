import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course',
	templateUrl: 'course.component.html',
	styles: [require('./course.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
	@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	deleteCourse(id: number) {
		this.deleteCourseEvent.emit(id);
	}

	calculateCourseFreshness(date) : string{
		let currentDate = Date.now();
		let currentDateCopy = new Date(currentDate);
		let createdDate = date;
		currentDateCopy.setDate(date.getDate() - 14);
		let twoWeeksAgoDate  =  currentDateCopy.getDate();

		console.log(currentDate);
		console.log(currentDateCopy);
		console.log(createdDate);
		console.log(twoWeeksAgoDate);

		if(createdDate < currentDate && createdDate >= twoWeeksAgoDate){
			return courseStatusClasses['fresh'];
		}else if(createdDate > currentDate){
			return courseStatusClasses['upcoming'];
		}
	}

	isTopRated(){
		return this.course.topRated;
	}

	calculateStatusClass(date): string[] {
		let coursesClasses = [];
		let freshnessClass = this.calculateCourseFreshness(date);

		if (freshnessClass){
			coursesClasses.push(freshnessClass);
		}

		if (this.isTopRated()){
			coursesClasses.push(courseStatusClasses['toprated']);
		}
		console.log(coursesClasses);
		return coursesClasses;

	}
}
