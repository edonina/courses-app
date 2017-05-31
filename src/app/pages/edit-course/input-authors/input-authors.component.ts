import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator, FormsModule, ReactiveFormsModule, FormGroup  } from '@angular/forms';

export function validateAuthorsInput(c: FormControl) {
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
	@Input() authors: any;
	@Input() course: any;
	@Input() parent: FormGroup;
	@Output() toggleAuthor = new EventEmitter<any>();


	constructor() {
		this.authorsList = [

			{
				"id": 1370,
				"firstName": "Polly",
				"lastName": "Sosa"
			},
			{
				"id": 8413,
				"firstName": "Greta",
				"lastName": "Richardson"
			},
			{
				"id": 7458,
				"firstName": "Deana",
				"lastName": "Bruce"
			},
			{
				"id": 5508,
				"firstName": "Patsy",
				"lastName": "Bright"
			},
			{
				"id": 3618,
				"firstName": "Laura",
				"lastName": "Kirby"
			},
			{
				"id": 9064,
				"firstName": "Quinn",
				"lastName": "Cain"
			},
			{
				"id": 9926,
				"firstName": "Burt",
				"lastName": "Holland"
			},
			{
				"id": 6440,
				"firstName": "Andrews",
				"lastName": "Byers"
			},
			{
				"id": 8509,
				"firstName": "Shawn",
				"lastName": "Craig"
			},
			{
				"id": 21,
				"firstName": "Maddox",
				"lastName": "Diaz"
			},
			{
				"id": 800,
				"firstName": "Glenda",
				"lastName": "Juarez"
			},
			{
				"id": 1772,
				"firstName": "Hilda",
				"lastName": "Gaines"
			},
			{
				"id": 3003,
				"firstName": "Abbott",
				"lastName": "Mckay"
			},
			{
				"id": 1167,
				"firstName": "Garrison",
				"lastName": "Chambers"
			},
			{
				"id": 9215,
				"firstName": "Ofelia",
				"lastName": "Rodgers"
			},
			{
				"id": 978,
				"firstName": "Avila",
				"lastName": "Bolton"
			},
			{
				"id": 612,
				"firstName": "Pam",
				"lastName": "Vazquez"
			},
			{
				"id": 6050,
				"firstName": "Norman",
				"lastName": "Love"
			},
			{
				"id": 2252,
				"firstName": "Reba",
				"lastName": "Perez"
			},
			{
				"id": 5524,
				"firstName": "Cobb",
				"lastName": "Hudson"
			},
			{
				"id": 5341,
				"firstName": "Nettie",
				"lastName": "Sanford"
			},
			{
				"id": 7333,
				"firstName": "Michele",
				"lastName": "Cunningham"
			},
			{
				"id": 8318,
				"firstName": "Rowland",
				"lastName": "Vasquez"
			},
			{
				"id": 4441,
				"firstName": "Willa",
				"lastName": "Cortez"
			},
			{
				"id": 9562,
				"firstName": "Dejesus",
				"lastName": "Snow"
			},
			{
				"id": 4998,
				"firstName": "Doyle",
				"lastName": "Webster"
			},
			{
				"id": 2138,
				"firstName": "Torres",
				"lastName": "Farley"
			},
			{
				"id": 3509,
				"firstName": "Jessie",
				"lastName": "Kelly"
			},
			{
				"id": 7653,
				"firstName": "Miranda",
				"lastName": "Christian"
			},
			{
				"id": 6185,
				"firstName": "Yvette",
				"lastName": "Foster"
			},
			{
				"id": 5186,
				"firstName": "Russell",
				"lastName": "Butler"
			},
			{
				"id": 9364,
				"firstName": "Berger",
				"lastName": "Powell"
			},
			{
				"id": 3477,
				"firstName": "Daugherty",
				"lastName": "Guy"
			},
			{
				"id": 2005,
				"firstName": "Dotson",
				"lastName": "Hernandez"
			},
			{
				"id": 1416,
				"firstName": "Ashlee",
				"lastName": "Hines"
			},
			{
				"id": 5907,
				"firstName": "Jacobson",
				"lastName": "Riddle"
			},
			{
				"id": 8339,
				"firstName": "Claire",
				"lastName": "Battle"
			},
			{
				"id": 2017,
				"firstName": "Orr",
				"lastName": "Conrad"
			},
			{
				"id": 7614,
				"firstName": "Moody",
				"lastName": "Cash"
			},
			{
				"id": 4165,
				"firstName": "Gilda",
				"lastName": "Huff"
			}

		];
	}

	writeValue(value: any) {


			if (value !== undefined) {
                this.authors = value;
            }
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


	checkCoursesAuthors(authors, authorId) {

		if (authors.filter(e => e.id == authorId).length > 0) {
			return true;
		}
		return false;
	}

	registerOnTouched() {}
}
