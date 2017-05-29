/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	OnDestroy,
	ViewEncapsulation,
	ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { AppState } from './app.service';
import { AuthorizationService, LoaderBlockService } from './core/services';
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
	public isAuth: boolean;
	public editedCourse: any;
	private authSubscription: Subscription;

	constructor(
		private authorizationService: AuthorizationService,
		private ngZone:NgZone,
		private loaderBlockService: LoaderBlockService,
		private cd: ChangeDetectorRef
	) {

		//this.editedCourse = false;
		this.editedCourse = {};
		/*this.editedCourse = {
			id: 3,
			title: 'The truth',
			description: 'The truth is that we set up too big goals. They scares us. Fear has big eyes. Try to split them into small ones. 3 April',
			date: new Date(2017, 3, 3),
			duration: 126,
			topRated: true
		}*/
	}

	ngOnInit() {
		/*this.ngZone.onUnstable.subscribe((data) => console.log('unstable', data));
		this.ngZone.onStable.subscribe((data) => console.log('stable', data));*/

		this.authSubscription = this.authorizationService.isAuthentificated().subscribe((r) => {
			console.log('>>>>>>>', r);
			this.cd.markForCheck();
			this.isAuth = r;
		});
	}
	OnDestroy() {
		this.authSubscription.unsubscribe();
	}

	checkAuthorization(): boolean {
		return this.isAuth;
	}

	updateAuthorization(): void {
		this.isAuth = this.authorizationService.isAuthentificated().getValue();
	}

	loginUser(login: string) {
		let credentials = {
			login: 'Morales',
			password: 'id'
		}
		this.authorizationService.loginUser(credentials);

		setTimeout(() => {
			this.loaderBlockService.hide();
		}, 400);

	}

	logoutUser(login: string) {
		this.authorizationService.logoutUser();
		this.isAuth = this.authorizationService.isAuthentificated().getValue();
	}
}
