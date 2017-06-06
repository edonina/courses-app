import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
	NgModule,
	ApplicationRef
} from '@angular/core';
import {
	removeNgStyles,
	createNewHosts,
} from '@angularclass/hmr';
import {
	RouterModule,
	PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { NoContentComponent } from './pages/no-content';

// Components
import { HeaderModule, FooterModule, LoaderBlockModule, BreadcrumbModule } from './core/components';

// Pages
import { CoursesModule } from './pages/courses';
import { EditCourseModule } from './pages/edit-course';
import { LoginModule } from  './pages/login';

// Services
import { CoursesService, AuthorizationService, LoaderBlockService, HttpService } from './core/services';
import {StoreModule} from "../../node_modules/@ngrx/store/src/ng2";

// Application wide providers
const APP_PROVIDERS = [
	CoursesService,
	AuthorizationService,
	LoaderBlockService,
	HttpService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		NoContentComponent
	],
	imports: [ // import Angular's modules
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
		HeaderModule,
		CoursesModule,
		BreadcrumbModule,
		EditCourseModule,
		FooterModule,
		LoginModule,
		LoaderBlockModule,
		StoreModule.provideStore({isAuthentificated: appReducer})

	],
	providers: [ // expose our Services and Providers into Angular's dependency injection
		ENV_PROVIDERS,
		APP_PROVIDERS
	]
})
export class AppModule {

	constructor(public appRef: ApplicationRef) {
	}

	public hmrOnInit(store: any) {
		if (!store || !store.state) { return; }
		this.appRef.tick();
		delete store.state;
	}

	public hmrOnDestroy(store: any) {
		const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}

	public hmrAfterDestroy(store: any) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
