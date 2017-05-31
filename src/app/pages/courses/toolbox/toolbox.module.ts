import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared';


@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, CommonModule, FormsModule, SharedModule],
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
