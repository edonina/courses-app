import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';

@Component({
	selector: 'input-duration',
	templateUrl: 'input-duration.component.html',
	styles: [require('./input-duration.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDurationComponent {
	@Input() public duration: any;
	/*@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();
*/
	constructor() {}

}
