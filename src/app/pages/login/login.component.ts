import { Component, ViewEncapsulation, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../../core/services';

@Component({
	selector: 'login',

	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	@Output() public loginUserEvent: EventEmitter<number> = new EventEmitter<number>();


	constructor(private authorizationService: AuthorizationService) {
		console.log('login constructor');
	}

	public ngOnInit() {
		console.log('login init');
	}




	public loginUser(login: string) {
		console.log('dsfsdfsdfsd');
		this.authorizationService.loginUser();
		this.loginUserEvent.emit();
	}
	public ngOnDestroy() {
		// unsubscribe here
	}
}
