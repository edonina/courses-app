// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './addCourse.routes';

// custom components
import { AddCourseComponent } from './addCourse.component';
import { CourseComponent } from './course/course.component';

import { ToolboxModule } from './toolbox/toolbox.module';
import { SharedModule } from '../../core/shared';

@NgModule({
	declarations: [
		AddCourseComponent,
		CourseComponent
	],
	imports: [
		routes,
		FormsModule,
		ToolboxModule,
		ReactiveFormsModule,
		CommonModule,
		SharedModule
	],
	exports: [AddCourseComponent]
})
export class AddCourseModule {
	constructor() {
	}
}
