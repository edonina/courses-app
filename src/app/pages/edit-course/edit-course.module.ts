// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// custom components
import { EditCourseComponent } from './edit-course.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputDurationComponent } from './input-duration/input-duration.component';
import { AuthorsInputComponent } from './input-authors/input-authors.component';


import { SharedModule } from '../../core/shared';

@NgModule({
	declarations: [
		InputDateComponent,
		InputDurationComponent,
		AuthorsInputComponent,
		EditCourseComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		SharedModule
	],
	exports: [EditCourseComponent]
})
export class EditCourseModule {
	constructor() {
	}

}
