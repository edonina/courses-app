import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/shared';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, FormsModule, SharedModule,	CommonModule,],
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
