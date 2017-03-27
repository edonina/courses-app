import { NgModule } from '@angular/core';
import { LoaderBlockComponent } from './loader-block.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [LoaderBlockComponent],
	imports: [CommonModule],
	exports: [LoaderBlockComponent]
})
export class LoaderBlockModule {
	constructor() {
	}
}
