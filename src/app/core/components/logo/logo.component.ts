import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: '.component-logo',
	templateUrl: 'logo.component.html',
	styles: [require('./logo.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class LogoComponent {
	@Input() public width: number;
	constructor(

	) {}
}
