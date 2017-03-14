import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, FormsModule],
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
