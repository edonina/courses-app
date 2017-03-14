import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../core/entities';
import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course',
	templateUrl: 'course.component.html',
	styles: ['./course.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
	@Input() public course: Course;
	@Output() change: EventEmitter<number> = new EventEmitter<number>();

	constructor(

	) {}

	public deleteCourse(id:number){
		this.change.emit(id);
	}

	public calculateStatusClass(status): string {
		return todoStatusClasses[status];
	}
}
