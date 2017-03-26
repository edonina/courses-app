/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	ViewEncapsulation,
	ChangeDetectionStrategy
} from '@angular/core';
import { AppState } from './app.service';
import { AuthorizationService } from './core/services';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	public isAuth:boolean;

	constructor(private authorizationService:AuthorizationService) {
		this.isAuth = authorizationService.isAuthentificated();
	}


	ngOnInit() {
	}

	checkAuthorization(): boolean {
		return this.isAuth = this.authorizationService.isAuthentificated();
	}

	updateAuthorization(): void {
		this.isAuth = this.authorizationService.isAuthentificated();
	}

	loginUser(login: string) {
		this.authorizationService.loginUser();
		this.isAuth = this.authorizationService.isAuthentificated();
	}

	logoutUser(login: string) {
		this.authorizationService.logoutUser();
		this.isAuth = this.authorizationService.isAuthentificated();
	}


}
