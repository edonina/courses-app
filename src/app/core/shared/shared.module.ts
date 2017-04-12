// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Pipes
import { DurationPipe, FindPipe, LimitByDatePipe, OrderByPipe} from '../pipes';

@NgModule({
	declarations: [
		DurationPipe,
		FindPipe,
		LimitByDatePipe,
		OrderByPipe
	],
	providers: [
		DurationPipe,
		FindPipe,
		LimitByDatePipe,
		OrderByPipe
	],
	exports: [
		DurationPipe,
		FindPipe,
		LimitByDatePipe,
		OrderByPipe
	]
})
export class SharedModule {
	constructor() {
	}
}
