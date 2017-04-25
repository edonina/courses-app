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
	private coursesServiceSubscription: Subscription;
	private courseListDataSubscription: Subscription;
	public courseListInitial: Course [];
	public courseListView: Course [];
	private isLoading: boolean = false;
	public courseListData: BehaviorSubject<any>;

	constructor(private coursesService:CoursesService, private loaderBlockService:LoaderBlockService, private cd: ChangeDetectorRef) {
		console.log('Course List constructor');
		this.courseListData = new BehaviorSubject<any>([]);
		this.courseListView = [];
	}

	public ngOnInit() {
		console.log('Home page init');
		this.loaderBlockService.hide();


		this.courseListDataSubscription = this.coursesService.courseListV.subscribe(r => {
			this.courseListView = r;
		});

		this.coursesServiceSubscription = this.coursesService.getCourseItems().subscribe(r => {
			this.coursesService.courseListV.next(r);
			this.cd.markForCheck();
		});


	}

	public ngOnDestroy() {
		 this.coursesServiceSubscription.unsubscribe();
		 this.courseListDataSubscription.unsubscribe();
	}

	public createCourse(id:number) {
		/*console.log(id);*/
	}

	public deleteCourseFromCoursesList(id: number) {
		let deleteConfirmation = confirm("Do you really want to delete this course?");
		if (deleteConfirmation) {
			this.coursesService.removeCourseItemById(id);
			setTimeout(() => {
				this.loaderBlockService.hide();
			}, 400);
		}
		this.loaderBlockService.show();
		/*console.log(id);*/
	}
}
