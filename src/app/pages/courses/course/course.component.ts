import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course',
	templateUrl: 'course.component.html',
	styles: ['./course.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
	@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	public deleteCourse(id: number) {
		this.deleteCourseEvent.emit(id);
	}

	public calculateStatusClass(date): string {
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
}
