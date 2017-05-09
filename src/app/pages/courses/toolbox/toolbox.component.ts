import {
	Component,
	ChangeDetectionStrategy,
	Input
} from '@angular/core';
import { CoursesService } from '../../../core/services';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { Course } from '../../../core/entities';
import { FindPipe } from '../../../core/pipes';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styles: [require('./toolbox.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent {
	@Input() public courseListData: BehaviorSubject <any>;
	@Input() public courseListInitial: Course [];

	public textToFind: string;

	constructor(private myFindPipe: FindPipe, private coursesService: CoursesService) {
		this.textToFind = '';
	}

	public findCourse() {
		let filtRes  = this.myFindPipe.transform(this.coursesService.courseList.getValue(), this.textToFind);
		//this.coursesService.courseListView.next(filtRes);
		this.coursesService.findCourses(this.textToFind);
	}
}
