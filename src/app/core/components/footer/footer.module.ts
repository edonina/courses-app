import { NgModule } from '@angular/core';
import { LogoModule } from '../logo';
import { FooterComponent } from './footer.component';

@NgModule({
	declarations: [FooterComponent],
	imports: [LogoModule],
	exports: [FooterComponent]
})
export class FooterModule {
	constructor() {
	}
}
