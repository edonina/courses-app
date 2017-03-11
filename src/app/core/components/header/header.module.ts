import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LogoModule } from '../logo';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, LogoModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}
