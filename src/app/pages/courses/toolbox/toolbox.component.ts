import {
	Component,
	ChangeDetectionStrategy,
	Input,
	ChangeDetectorRef
} from '@angular/core';
import { CoursesService } from '../../../core/services';
import { Subscription, Observable } from 'rxjs';
import { Course } from '../../../core/entities';
import { FindPipe } from '../../../core/pipes';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styles: [require('./toolbox.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent {
	@Input() public courseList:any;
	public textToFind: string;
	private coursesServiceSubscription:Subscription;


	constructor(private coursesService:CoursesService, private findPipe: FindPipe, private cd: ChangeDetectorRef) {
		this.textToFind = '';
	}

	public findCourse() {

		this.coursesServiceSubscription = this.coursesService.getCourseItems().subscribe((res:Course[]) => {
			this.courseList = this.findPipe.transform(res, this.textToFind);
			this.cd.markForCheck();
			console.log('sorted list:');
			console.log(this.courseList);
		});
	}
}
