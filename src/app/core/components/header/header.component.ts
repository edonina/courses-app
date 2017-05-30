import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorizationService } from '../../services';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
	@Input() public isAuth: boolean;
	@Output() public logoutUserEvent: EventEmitter<number> = new EventEmitter<number>();

	public isAutentificatedState: boolean;
	public user: string;

	constructor(
		private authorizationService: AuthorizationService,
		private cd: ChangeDetectorRef
	) {
		// this.user = authorizationService.getUserInfo();
	}

	public ngOnInit() {
		this.authorizationService.userLogin$.subscribe((res)=> {
			this.user = res;
			this.cd.markForCheck();
		});
	}

	public logoutUser(login: string) {
		this.logoutUserEvent.emit();
	}
}
