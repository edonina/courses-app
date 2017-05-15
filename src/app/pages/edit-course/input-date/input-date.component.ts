import {
	Component,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
	forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';


export function validateCounterRange(c: FormControl) {
	console.log('jjjj',c.value);
	return null;
	/*let dateStringArr = c.value.split('/')
	let date = new Date(`${dateStringArr[1]}/${dateStringArr[0]}/${dateStringArr[2]}`);
	if (isNaN(date.getTime())) {
		return null;
	} else {
		return {wrongDateFormat: true};
	}*/
}

@Component({
	selector: 'input-date',
	templateUrl: 'input-date.component.html',
	styles: [require('./input-date.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputDateComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useValue: validateCounterRange,
			multi: true
		}
	]
})
export class InputDateComponent implements ControlValueAccessor {
	@Input() public courseDate: Date;
	/*@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();
*/
	constructor() {}

	writeValue(value: any) {
		if (value !== undefined) {
			this.courseDate = value;
		}
	}
	propagateChange = (_: any) => {};

	registerOnChange(fn) {
		this.propagateChange = fn;
	}


	registerOnTouched(){}

}
