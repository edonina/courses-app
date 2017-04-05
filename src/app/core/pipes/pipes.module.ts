import { NgModule }      from '@angular/core';
import { DurationPipe }  from './duration.pipe';

@NgModule({
	imports:        [],
	declarations:   [DurationPipe],
	exports:        [DurationPipe],
})

export class PipeModule {

	static forRoot() {
		return {
			ngModule: PipeModule,
			providers: [],
		};
	}
}
