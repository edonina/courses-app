import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output,Input, ChangeDetectorRef } from '@angular/core';
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

}`],
	template: require('./edit-course.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCourseComponent implements OnInit, OnDestroy {
	@Input() public editedCourse:any;

	private coursesServiceSubscription:Subscription;
	private courseListDataSubscription:Subscription;

	public courseListInitial:Course[];
	public courseListView:Course[];

	public maxTitleLength: number = 50;
	public maxDescriptionLength: number = 500;
	public outerCounterValue : number = 5;
	public editCourceForm: FormGroup;
	public dur: number;

	private isLoading:boolean = false;
	public courseListData: BehaviorSubject<any>;

	constructor(private coursesService:CoursesService, private loaderBlockService:LoaderBlockService, private fb: FormBuilder) {
		this.editedCourse = {
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
		}
	}

	public ngOnInit() {
		this.editCourceForm = this.fb.group({
			date : this.editedCourse.date,
			duration : [this.editedCourse.duration, validateOnlyNumbers],
			//authors : [this.editedCourse.authors, validateAuthorsInput]
			authors : this.fb.array(this.editedCourse.authors)
		});

	}

	public ngOnDestroy() {}

	public saveCourse(){
		console.log(this.editCourceForm.value);
		console.log(this.editCourceForm);
	}

	onToggleAuthor({author, $event}) {
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
	}
}
