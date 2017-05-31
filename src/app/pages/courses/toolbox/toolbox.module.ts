import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/shared';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, FormsModule, SharedModule,	CommonModule,],
=======


@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, FormsModule, SharedModule, CommonModule],
>>>>>>> dd950c8b628f7b64e35263062c2f4a70d0d9f204
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
