import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'main-footer',
	templateUrl: './footer.component.html',
	styles: [require('./footer.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
	width: number = 30;
	constructor() {

	}
}
