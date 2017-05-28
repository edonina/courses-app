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
	public editedCourse = {
		id: 3,
		title: 'The truth',
		description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 3 April',
		date: new Date(2017, 3, 3),
		duration: 126,
		topRated: true,
		authors:[
			{id:3},
			{id:4}
		]
	};
	authors: Array<any> = [
		{
			id: 1,
			surname: 'Tuhliy'
		},
		{
			id: 2,
			surname: 'Kosoy'
		},
		{
			id: 3,
			surname: 'Nyasha'
		},
		{
			id: 4,
			surname: 'Motto'
		},
		{
			id: 5,
			surname: 'Crockford'
		}
	];
	course: any = {
		title: 'The best course',
		authors: [
			{id: 3},
			{id: 5}
		]};

	editCourceForm = this.fb.group({
		/*authors: this.fb.array(this.course.authors),*/
		title : [this.editedCourse.title, validateAuthorsInput],
		description : [this.editedCourse.description, validateAuthorsInput],
		authors : [this.editedCourse.authors, validateAuthorsInput],
		date : [this.editedCourse.date, validateCounterRange],
		duration : [this.editedCourse.duration, validateOnlyNumbers],
		/*title : '',
		description : '',
		authors : [],
		date : Date.now(),
		duration : 0,*/
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
		this.id = route.snapshot.params['id'];
		console.log('dddd', this.id);
	}

	public ngOnInit() {
		console.log('init');
		this.sub= this.coursesService.getCourseItemById(this.id).subscribe(r=>{
			this.editedCourse = r;
			console.log('dddd2', r);
		});


	}

	public ngOnDestroy() {}

	public saveCourse(){
		console.log(this.editCourceForm.value);
		console.log('val:',this.editCourceForm);
	}
	public cancelCourse(){
		this.router.navigate(['/courses']);
	}

	/*onToggleAuthor({author, $event}) {
		console.log(author.id, $event.target.checked);
		const isChecked = $event.target.checked;
		const control = this.editCourceForm.get('authors') as FormArray;
		const authorsArr = control.value;

		if (isChecked) {
			control.push(this.createAuthor(author.id));
		} else {
			// debugger;
			let index = authorsArr.findIndex(_author => _author.id === author.id);
			control.removeAt(index);
		}
	}

	createAuthor(id){
		return this.fb.group({id});
	}*/
}
