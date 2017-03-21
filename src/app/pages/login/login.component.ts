import { Component, ViewEncapsulation, OnInit, OnDestroy, Output } from '@angular/core';

import { AuthorizationService } from '../../core/services';

@Component({
	selector: 'login',

	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})
export class LoginComponent implements OnInit, OnDestroy {

	constructor(private authorizationService: AuthorizationService) {
		console.log('login constructor');
	}

	public ngOnInit() {
		console.log('login init');
	}




	public loginUser(login: string) {
		console.log('dsfsdfsdfsd');
		this.authorizationService.loginUser();
	}
	public ngOnDestroy() {
		// unsubscribe here
	}
}
