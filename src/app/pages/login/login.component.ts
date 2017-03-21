import { Component, ViewEncapsulation, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'login',

	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	@Output() public loginUserEvent:EventEmitter<number> = new EventEmitter<number>();

	constructor() {
		console.log('login constructor');
	}

	public ngOnInit() {
		console.log('login init');
	}

	public loginUser(login:string) {
		this.loginUserEvent.emit();
	}

	public ngOnDestroy() {
		// unsubscribe here
	}
}
