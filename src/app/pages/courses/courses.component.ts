import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

import { CoursesService, LoaderBlockService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'courses',
	styles: [require('./courses.styles.scss')],
	template: require('./courses.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
	private coursesServiceSubscription:Subscription;
	private courseListDataSubscription:Subscription;
	public courseListInitial:Course[];
	public courseListView:Course[];

	private isLoading:boolean = false;
	public courseListData: BehaviorSubject<any>;



	constructor(private coursesService:CoursesService, private loaderBlockService:LoaderBlockService) {
		console.log('Course List constructor');
		this.courseListData = new BehaviorSubject<any>([]);
	}

	public ngOnInit() {
		console.log('Home page init');
		this.loaderBlockService.hide();

		this.courseListDataSubscription = this.courseListData.subscribe(r => {
			this.courseListView = r;
		});

		/*this.isLoading = true;*/
		this.coursesServiceSubscription = this.coursesService.getCourseItems().subscribe((res:Course[]) => {
				this.courseListInitial = res;
				this.courseListData.next(res);
				this.isLoading = false;
		});

	}

	public ngOnDestroy() {
		 this.coursesServiceSubscription.unsubscribe();
		 this.courseListDataSubscription.unsubscribe();
	}

	public createCourse(id:number) {
		console.log(id);
	}

	public deleteCourseFromCoursesList(id:number) {
		let deleteConfirmation = confirm("Do you really want to delete this course?");
		if (deleteConfirmation) {
			this.courseListView = this.coursesService.removeCourseItemById(id);
			setTimeout(() => {
				this.loaderBlockService.hide();
			}, 400);
		}

		this.loaderBlockService.show();
		console.log(id);
	}
}
