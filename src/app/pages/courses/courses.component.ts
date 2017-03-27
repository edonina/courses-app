import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';

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
		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page init');
		this.loaderBlockService.hide();

		/*this.isLoading = true;
		this.coursesServiceSubscription = this.coursesService.getCourseItems().subscribe((res: Course[]) => {
			this.courseList = res;
			this.isLoading = false;
		});*/
		this.courseList = this.coursesService.getCourseItems();
	}

	public ngOnDestroy() {
		//this.coursesServiceSubscription.unsubscribe();
	}

	public createCourse(id: number) {
		console.log(id);
	}

	public deleteCourseFromCoursesList(id: number) {
		let deleteConfirmation = confirm("Do you really want to delete this course?");
		if(deleteConfirmation){
			this.loaderBlockService.show();
			let loaderSubscription = this.loaderBlockService.showLoader$.subscribe((res)=> {
				console.log('res');
				console.log(res);
				if (res){
					this.courseList = this.coursesService.removeCourseItemById(id);
					this.loaderBlockService.hide();
				}

			});


			console.log(id);
		}
	}
}
