import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/shared';

@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, FormsModule, SharedModule],
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
