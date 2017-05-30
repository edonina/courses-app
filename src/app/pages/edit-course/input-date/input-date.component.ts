import {
	Component,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
	forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS,FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


export function validateCounterRange(c: FormControl) {
	if(typeof(c.value)=="string"){
		let dateStringArr = c.value.split('/');
		let date = new Date(`${dateStringArr[0]}/${dateStringArr[1]}/${dateStringArr[2]}`);

		if (!isNaN(date.getTime())) {
			return null;
		} else {
			return {wrongDateFormat: true};
		}
	}
	return null;
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
export class InputDateComponent implements ControlValueAccessor/*, PipeTransform*/ {
	@Input() public courseDate: Date;
	public courseDateString: string;
	public courseDatePipe: any;
	@Input() parent: FormGroup;
	/*@Input() public course: Course;
	@Output() public deleteCourseEvent: EventEmitter<number> = new EventEmitter<number>();
*/
	constructor() {}

	writeValue(value: any) {

		if (value !== undefined) {
			this.courseDateString = value;
			/*var datePipe = new DatePipe("en-US");
			this.courseDateString = datePipe.transform(value, 'dd/MM/yyyy');*/
		}
	}
	propagateChange = (_: any) => {};

	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	registerOnTouched(){}

	private onChange(event) {
		this.courseDate = event.target.value;
		this.propagateChange(event.target.value);
		var datePipe = new DatePipe("en-US");
		try{this.courseDatePipe = datePipe.transform(this.courseDate, 'dd/MM/yyyy')}
		catch (e){
			this.courseDatePipe = 'Oops, smth wrong' ;
		}
	}

}
