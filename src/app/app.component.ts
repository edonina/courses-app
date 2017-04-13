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
import { NgZone } from '@angular/core';

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
	public editedCourse: any;

	constructor(private authorizationService:AuthorizationService, private ngZone:NgZone) {
		this.isAuth = authorizationService.isAuthentificated();
		//this.editedCourse = false;
		//this.editedCourse = {};
		this.editedCourse = {
			id: 3,
			title: 'The truth',
			description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 3 April',
			date: new Date(2017, 3, 3),
			duration: 126,
			topRated: true
		}
	}


	ngOnInit() {
		this.ngZone.onUnstable.subscribe((data) => console.log('unstable', data));
		this.ngZone.onStable.subscribe((data) => console.log('stable', data));

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
