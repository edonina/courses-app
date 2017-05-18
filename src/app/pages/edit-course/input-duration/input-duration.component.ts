import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


export function validateOnlyNumbers(c: FormControl) {

	if(!isNaN(parseFloat(c.value)) && isFinite(c.value)){
		console.log('validator is number', c.value);
		return null
	}
	return {wrongDurationType: true};
}

@Component({
	selector: 'input-duration',
	templateUrl: 'input-duration.component.html',
	//styles: [require('./input-duration.styles.scss')],
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputDurationComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useValue: validateOnlyNumbers,
			multi: true
		}
	]
})

export class InputDurationComponent implements ControlValueAccessor {
	@Input() public duration: any;
	@Input() parent: FormGroup;
	@Input() public form:any;

	constructor() {}

	setDisabledState(){}

	writeValue(value: any) {
		if (value !== undefined) {
			this.duration = value;
		}
		console.log('this: ', this);
	}

	propagateChange = (_: any) => {};

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	private onChange(event) {
		this.duration = event.target.value;
		this.propagateChange(event.target.value);
	}

	registerOnTouched(){}
}
