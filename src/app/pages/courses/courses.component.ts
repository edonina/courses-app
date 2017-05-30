import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { CoursesService, LoaderBlockService, AuthorizationService } from '../../core/services';
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
	private authSubscription: Subscription;
	public courseListInitial: Course [];
	public courseListView: Course [];
	public isAuth: boolean;
	private isLoading: boolean = false;
	private pageNum: number = 0;
	public courseListData: BehaviorSubject<any>;

	constructor(
		private coursesService:CoursesService,
		private loaderBlockService:LoaderBlockService,
		private authorizationService:AuthorizationService,
		private cd: ChangeDetectorRef
	) {
		console.log('Course List constructor');
		this.courseListData = new BehaviorSubject<any>([]);
		this.courseListView = [];
	}

	public ngOnInit() {
		console.log('Home page init');
		this.loaderBlockService.hide();

		this.authSubscription = this.authorizationService.isAuthentificated().subscribe((r) => {
			console.log('>>>>>>>', r);
			this.isAuth = r;
			this.cd.markForCheck();
		});


		this.coursesService.getCourseItems();
		this.courseListDataSubscription = this.coursesService.courseListV.subscribe(r => {
			this.courseListView = r;
			console.log('-----------------', this.courseListView.length);
			this.cd.markForCheck();
		});
		this.coursesServiceSubscription = this.coursesService.courseList.subscribe(r => {

		});
	}

	public ngOnDestroy() {
		 this.courseListDataSubscription.unsubscribe();
		 this.coursesServiceSubscription.unsubscribe();
		 this.authSubscription.unsubscribe();
	}

	public createCourse(id:number) {
		/*console.log(id);*/
	}

	public loadMoreCourses(){
		this.pageNum = this.pageNum + 1;
		console.log('this.pageNum', this.pageNum)
		this.coursesService.loadMoreCourses(this.pageNum);
		this.cd.markForCheck();
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
