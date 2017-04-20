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
		let currentDateMs = new Date(currentDate).getTime();
		let createdDateMS = date.getTime();

		//86400 * 1000 * 14  Each day is 86400 seconds
		let twoWeeksPeriod  =   1209600000;


		if( createdDateMS < currentDateMs && createdDateMS >= currentDateMs - twoWeeksPeriod){
			return courseStatusClasses['fresh'];
		}else if(createdDateMS > currentDateMs){
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
		/*console.log(coursesClasses);*/
		return coursesClasses;

	}
}
