import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output,Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { validateCounterRange } from './input-date/input-date.component';
import { validateOnlyNumbers } from './input-duration/input-duration.component';
import { validateAuthorsInput } from './input-authors/input-authors.component';

import { CoursesService, LoaderBlockService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'edit-course',
	//styles: [require('./edit-course.styles.scss')],
	host: {

		'[class.custom-input]': 'true',
	},
	styles: [
		`

	:host /deep/ .ng-invalid > input{
	  border-left: solid 3px red;
	}
	.authors-area{
		border: 1px solid #ccc;
		padding: 10px;
	}
	:host /deep/ .ng-invalid >.authors-area{
		border-left: solid 3px red;
	}
	input.ng-invalid, input.textarea{
		border-left: solid 3px red;
	}


`],
	template: require('./edit-course.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCourseComponent implements OnInit, OnDestroy {

	//@Input() public editedCourse:any;




	public maxTitleLength: number = 50;
	public maxDescriptionLength: number = 500;
	public outerCounterValue : number = 5;
	public form: FormGroup;
	public dur: number;

	private isLoading:boolean = false;
	public courseListData: BehaviorSubject<any>;
	public editedCourse = {};
	authors: Array<any> = [];


	editCourceForm = this.fb.group({

		title : ['', validateAuthorsInput],
		description : ['', validateAuthorsInput],
		authors : [[], validateAuthorsInput],
		date : [this.formattedDate(), validateCounterRange],
		duration : [0, validateOnlyNumbers],

	});

	id: number;
	private sub: any;

	constructor(
		private coursesService:CoursesService,
		private loaderBlockService:LoaderBlockService,
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute
	) {
		console.log(route.snapshot.params);
		this.id = route.snapshot.params['id'];
	}

	public ngOnInit() {
		console.log('init');
		this.editedCourse= this.coursesService.getCourseItemById(this.id);
		this.editCourceForm = this.fb.group({
			/*authors: this.fb.array(this.course.authors),*/
			title : [this.editedCourse['title'], validateAuthorsInput],
			description : [this.editedCourse['description'], validateAuthorsInput],
			authors : [this.editedCourse['authors'], validateAuthorsInput],
			date : [this.formattedDate(this.editedCourse['date']), validateCounterRange],
			duration : [this.editedCourse['duration'], validateOnlyNumbers],
		});


		console.log('dddd2', this.sub);
	}

	public ngOnDestroy() {}

	public saveCourse(){
		console.log(this.editCourceForm.value);
		console.log('val:',this.editCourceForm);
	}
	public cancelCourse(){
		this.router.navigate(['/courses']);
	}

	formattedDate(d = new Date) {
		d = new Date(d);
		let month = String(d.getMonth() + 1);
		let day = String(d.getDate());
		const year = String(d.getFullYear());

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return `${month}/${day}/${year}`;
}

}
