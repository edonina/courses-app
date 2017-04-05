// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

import { ToolboxModule } from './toolbox/toolbox.module';
import { DurationPipe, OrderByPipe } from '../../core/pipes/index';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseComponent,
		DurationPipe,
		OrderByPipe
	],
	imports: [
		routes,
		FormsModule,
		ToolboxModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports: [CoursesComponent]
})
export class CoursesModule {
	constructor() {
	}
}
