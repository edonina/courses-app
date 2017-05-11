import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl  } from '@angular/forms';


export function validateCounterRange2(c: FormControl) {
	let err = {
		rangeError: {
			given: c.value,
			max: 10,
			min: 0
		}
	};

	return (c.value > 10 || c.value < 0) ? err : null;
}

@Component({
	selector: 'input-duration',
	templateUrl: 'input-duration.component.html',
	styles: [require('./input-duration.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputDurationComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useValue: validateCounterRange2,
			multi: true
		}
	]
})
export class InputDurationComponent implements ControlValueAccessor {
	@Input() public duration: any;
	/*@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();
*/
	constructor() {}

	writeValue(value: any) {
		if (value !== undefined) {
			/*this.courseDate = value;*/
		}
	}

	registerOnChange(){}
	registerOnTouched(){}
}
