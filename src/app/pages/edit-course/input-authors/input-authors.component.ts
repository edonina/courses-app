import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator, FormsModule, ReactiveFormsModule, FormGroup  } from '@angular/forms';

export function createvAuthorsInputValidator(formVal) {
	console.log('---2', formVal)
	return function validateAuthorsInput(c: FormControl) {

		if(formVal.length > 0){
			//console.log('validator authors: ', c.value.length);
			return null
		}

		return {authorsRequired: true};



	}
}export function validateAuthorsInput(c: FormControl) {
	if(c.value.length > 0){
		//console.log('validator authors: ', c.value.length);
		return null
	}

	return {authorsRequired: true};
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
			//useValue: forwardRef(() => AuthorsInputComponent),
			useValue: validateAuthorsInput,
			multi: true
		}
	]
})
export class AuthorsInputComponent implements ControlValueAccessor/*, Validator*/ {
	//@Input() public authors: any;
	public authorsList: any;
	public parseError: any;
	validateFn:Function;
	@Input() authors: any;
	@Input() course: any;
	@Input() parent: FormGroup;
	@Output() toggleAuthor = new EventEmitter<any>();


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


		/*	if (value !== undefined) {
                this.authors = value;
            }*/
	}
	get chosenAuthors() {
		/*console.log('---',this.parent.get('authors'));
		console.log('---',this.parent.controls['authors'];*/
		return this.parent.get('authors').value;
	}

	isChecked(author) {
		//return true
		return this.chosenAuthors.map(_author => _author.id).includes(author.id);
	}

	propagateChange = (_: any) => {};

	public registerOnChange(fn: any) {
		console.log('------3', this.parent.get('authors'));

		this.propagateChange = fn;
		//console.log(this.parent);
	}
	ngOnInit() {
		this.validateFn = createvAuthorsInputValidator(this.parent);
	}

	validate(c: FormControl) {
		return this.validateFn(c);
	}
	/*public validate(c: FormControl) {
		console.log('------', this.parent.get('authors'));
		if(this.parent.get('authors').length > 0){
			//console.log('validator authors: ', c.value.length);
			return null
		}

		return {authorsRequired: true};
	}*/

	private onChange(event) {
		console.log('------3', this.parent.get('authors'));


		/*if(this.parent.get('authors').length > 0) {
			// parse it to json

			this.parseError = false;
		} else {
			// set parse error if it fails
			this.parseError = true;
		}
*/

	}

/*
	private onChange(event) {
		console.log('event.target.checked:', event.target.checked );
		if (
			event.target.checked &&
			!this.checkCoursesAuthors(this.authors, event.target.value)
		) {
			this.authors.push({id: event.target.value});
			this.propagateChange(this.authors);

		} else if(
			!event.target.checked &&
			this.checkCoursesAuthors(this.authors, event.target.value)
		) { // may be redundant condition
			let index = this.authors.findIndex(x => x.id==event.target.value);
			if(index >= 0){
				this.authors.splice(index, 1);
			}
			this.propagateChange(this.authors);

		}
		console.log(event.target.checked);
	}
*/

/*
	checkCoursesAuthors(authors, authorId) {

		if (authors.filter(e => e.id == authorId).length > 0) {
			return true;
		}
		return false;
	}
*/

	registerOnTouched() {}
}
