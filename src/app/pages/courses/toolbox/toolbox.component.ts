import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styles: [require('./toolbox.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

export class ToolboxComponent {
	public textToFind: string;
	constructor() {
		this.textToFind = '';
	}

	public findCourse() {
		console.log(this.textToFind);
	}
}
