import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodoService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./courses.styles.scss')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {
	private todoServiceSubscription: Subscription;
	private courseList: Course[];
	private isLoading: boolean = false;

	constructor(private todoService: TodoService) {
		console.log('Home page constructor');

		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page init');

		this.isLoading = true;
		this.courseList = [
			{
				id: 0,
				title: "How to learn Angular 2 in few hours",
				description: "We all wanna get something without any effort, so forget about few hours, it will take you for ages.",
				creationDate: new Date('11.03.2017'),
				duration: 167
			},
			{
				id: 1,
				title: "Yet another motivational video",
				description: "See videos, read tons of articles, how to do at least anything, but advice is the one: just get your ass off the sofa and start doing.",
				creationDate: new Date('09.03.2017'),
				duration: 37
			},
			{
				id: 2,
				title: "The truth",
				description: "The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones.",
				creationDate: new Date('05.03.2017'),
				duration: 126
			}
		]
		this.todoServiceSubscription = this.todoService.getTodoItems().subscribe((res: Course[]) => {
			// this.courseList = res;
			this.isLoading = false;
		});
	}

	public ngOnDestroy() {
		this.todoServiceSubscription.unsubscribe();
	}
}
