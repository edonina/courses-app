import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [BreadcrumbComponent],
	imports: [RouterModule, CommonModule],
	exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {
	constructor() {
	}
}
