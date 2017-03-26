import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styles: [require('./toolbox.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
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
