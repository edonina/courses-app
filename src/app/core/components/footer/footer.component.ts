import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'main-footer',
	templateUrl: './footer.component.html',
	styles: [require('./footer.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
	constructor() {
	}
}
