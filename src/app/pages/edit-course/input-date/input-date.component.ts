import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';

@Component({
	selector: 'input-date',
	templateUrl: 'input-date.component.html',
	styles: [require('./input-date.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateComponent {
	@Input() public courseDate: Date;
	/*@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();
*/
	constructor() {}

}
