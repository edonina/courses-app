import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output,Input, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

import { CoursesService, LoaderBlockService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'edit-course',
	styles: [require('./edit-course.styles.scss')],
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

	private isLoading:boolean = false;
	public courseListData: BehaviorSubject<any>;


	constructor(private coursesService:CoursesService, private loaderBlockService:LoaderBlockService) {
		this.editedCourse = {
			id: 3,
			title: 'The truth',
			description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 3 April',
			date: new Date(2017, 3, 3),
			duration: 126,
			topRated: true
		}


		/*console.log('Course List constructor');
		this.courseListData = new BehaviorSubject<any>([]);*/
	}
	public ngOnInit() {
	/*	console.log('this.editedCourse');
		console.log(this.editedCourse);*/

	}
	public ngOnDestroy() {
	/*	this.coursesServiceSubscription.unsubscribe();
		this.courseListDataSubscription.unsubscribe();*/
	}

}
