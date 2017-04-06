// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Pipes
import { DurationPipe, OrderByPipe, FindPipe } from '../pipes';

@NgModule({
	declarations: [
		DurationPipe,
		OrderByPipe,
		FindPipe
	],
	providers: [
		DurationPipe,
		OrderByPipe,
		FindPipe
	],
	exports: [
		DurationPipe,
		OrderByPipe,
		FindPipe
	]
})
export class SharedModule {
	constructor() {
	}
}
