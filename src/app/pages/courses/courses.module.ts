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
import { SharedModule } from '../../core/shared';

@NgModule({
	declarations: [
		CoursesComponent,
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
	exports: [CoursesComponent]
})
export class CoursesModule {
	constructor() {
	}
}
