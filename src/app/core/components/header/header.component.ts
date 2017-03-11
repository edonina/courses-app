import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
	width: number = 60;
	constructor() {

	}
}
