import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule],
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
