import { Component } from '@angular/core';

import { AuthorizationService } from '../../services';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.styles.scss')]

})
export class HeaderComponent {
	public isAutentificatedState:boolean;
	public user:string;

	constructor(private authorizationService:AuthorizationService) {
		this.isAutentificatedState = authorizationService.isAuthentificated();
		this.user = authorizationService.getUserInfo();
	}

	public logoutUser(login:string) {
		console.log('ffkfkfkf');
		console.log(this.isAutentificatedState);
		this.authorizationService.logoutUser();
	}
}
