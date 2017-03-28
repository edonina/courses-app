import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorizationService } from '../../services';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
	@Input() public isAuth:boolean;
	@Output() public logoutUserEvent:EventEmitter<number> = new EventEmitter<number>();

	public isAutentificatedState:boolean;
	public user:Observable<string>;


	constructor(private authorizationService:AuthorizationService) {
		//this.user = authorizationService.getUserInfo();
	}

	public ngOnInit(){
		this.authorizationService.userLogin$.subscribe((res)=>{
			this.user = res;
		})

	}

	public logoutUser(login:string) {
		this.logoutUserEvent.emit();
	}
}
