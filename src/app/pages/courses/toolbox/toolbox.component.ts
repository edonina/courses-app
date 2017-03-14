import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styles: [require('./toolbox.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class ToolboxComponent {
	private couseName: string;
	constructor() {
		this.couseName = '';

	}
	findCourse(){
		console.log(this.couseName);
	}
}
