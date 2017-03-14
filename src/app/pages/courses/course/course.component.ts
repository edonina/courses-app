import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../core/entities';
import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course',
	templateUrl: 'course.component.html',
	styles: ['./course.component.scss']
})
export class CourseComponent {
	@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	public deleteCourse(id: number) {
		this.deleteCourseEvent.emit(id);
	}

	public calculateStatusClass(status): string {
		return todoStatusClasses[status];
	}
}
