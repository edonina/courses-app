import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output,Input, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

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




    :host.ng-pristine  /deep/ .error-msg {
        display:none;
    }

    :host.ng-valid  /deep/ .error-msg {
        display:none;
    }

    :host.ng-untouched  /deep/ .error-msg {
        display:none;
    }

    :host.ng-touched.ng-invalid  /deep/ .error-msg {
       display:inline;
    }

    .text-danger { font-weight: 500; }
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
	public form: FormGroup;
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
		this.dur = 5;



		/*console.log('Course List constructor');
		this.courseListData = new BehaviorSubject<any>([]);*/
	}
	public ngOnInit() {
	/*	console.log('this.editedCourse');
		console.log(this.editedCourse);*/

		this.form = this.fb.group({
			/*			counter: [5, validateCounterRange],*/
			date : this.editedCourse.date,
			duration : [this.editedCourse.duration, validateOnlyNumbers],
			authors : [this.editedCourse.authors, validateOnlyNumbers]
		});

	}
	public ngOnDestroy() {
	/*	this.coursesServiceSubscription.unsubscribe();
		this.courseListDataSubscription.unsubscribe();*/
	}

	public saveCourse(){
		console.log(this.form.value);
		console.log(this.form);
	}

}
