import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LogoModule } from '../logo';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, LogoModule, CommonModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}
