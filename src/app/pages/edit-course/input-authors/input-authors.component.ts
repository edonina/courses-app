import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';


export function validateAuthorsInput(c: FormControl) {

	let err = {
		rangeError: {
			given: c.value,
			max: 10,
			min: 0
		}
	};
	if(!isNaN(parseFloat(c.value)) && isFinite(c.value)){
		console.log('validator is number', c.value);
		return null
	}

	return err;
}

@Component({
	selector: 'input-authors',
	templateUrl: 'input-authors.component.html',
	//styles: [require('./input-duration.styles.scss')],
	styles: [
		`
    :host.ng-touched.ng-invalid ( input) {
       border-left: 5px solid #a94442; /* red */
    }


}`],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => AuthorsInputComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useValue: validateAuthorsInput,
			multi: true
		}
	]
})
export class AuthorsInputComponent implements ControlValueAccessor {
	@Input() public authors: any;
	public authorsList: any;

	constructor() {
		this.authorsList = [
			{
				id: 0,
				name: 'Author0'
			},
			{
				id: 1,
				name: 'Author1'
			},
			{
				id: 2,
				name: 'Author2'
			},
			{
				id: 3,
				name: 'Author3'
			},
			{
				id: 4,
				name: 'Author4'
			},
			{
				id: 5,
				name: 'Author5'
			}
		];
	}

	writeValue(value: any) {
		if (value !== undefined) {
			this.authors = value;
		}
	}

	propagateChange = (_: any) => {};

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	private onChange(event) {
		if(event.target.checked && !this.checkCoursesAuthors(this.authors,event.target.value)){
			this.authors.push({ id: event.target.value});
			console.log(event);
			// update the form

		}else{
			var index = this.authors.findIndex(function(o){
				return o.id === event.target.value;
			})
			this.authors.splice(index, 1);
		}
		console.log(this.authors)
		this.propagateChange(this.authors);
	}

	checkCoursesAuthors(authors, authorId ){

		if (authors.filter(e => e.id == authorId).length > 0) {
			/* vendors contains the element we're looking for */
			return true;
		}
		return false;

	}

	registerOnTouched(){}
}
