import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: '.component-logo',
	templateUrl: 'logo.component.html',
	styles: [require('./logo.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LogoComponent {
	@Input() public width: number;
	constructor(

	) {}
}
