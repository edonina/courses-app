import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../../services';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.styles.scss')]

})
export class HeaderComponent {
	@Input() public isAuth:boolean;
	@Output() public logoutUserEvent:EventEmitter<number> = new EventEmitter<number>();

	public isAutentificatedState:boolean;
	public user:string;

	constructor(private authorizationService:AuthorizationService) {
		this.user = authorizationService.getUserInfo();
	}

	public logoutUser(login:string) {
		this.logoutUserEvent.emit();
	}
}
