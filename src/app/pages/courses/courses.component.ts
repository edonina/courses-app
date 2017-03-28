import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

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
	private courseList: Course[];
	private isLoading: boolean = false;

	constructor(private coursesService: CoursesService, private loaderBlockService:LoaderBlockService) {
		console.log('Home page constructor');
		// this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page init');
		this.loaderBlockService.hide();

		/*this.isLoading = true;*/
		this.coursesServiceSubscription = this.coursesService.getCourseItems().subscribe((res: Course[]) => {
			this.courseList = res;
			this.isLoading = false;
		});
		// this.courseList = this.coursesService.getCourseItems();
	}

	public ngOnDestroy() {
		// this.coursesServiceSubscription.unsubscribe();
	}

	public createCourse(id: number) {
		console.log(id);
	}

	public deleteCourseFromCoursesList(id: number) {
		// let deleteConfirmation = confirm("Do you really want to delete this course?");
		let loaderSubscription = this.loaderBlockService.showLoader$.subscribe((res) => {
			console.log('result in courses comp: ', res);
			// this.isLoading = res;
			if (res) {
				 this.courseList = this.coursesService.removeCourseItemById(id);
				 setTimeout(() => {
					this.loaderBlockService.hide();
				 }, 400);
			}

		});
		let deleteConfirmation = true;
		if (deleteConfirmation) {
			this.loaderBlockService.show();


			console.log(id);
		}
	}
}
