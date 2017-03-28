import {
	Component,
	ViewEncapsulation,
	OnInit,
	OnDestroy,
	Output,
	EventEmitter,
	ChangeDetectionStrategy
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoaderBlockService } from '../../core/services';

@Component({
	selector: 'login',
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
	@Output() public loginUserEvent:EventEmitter<number> = new EventEmitter<number>();

	constructor(private loaderBlockService:LoaderBlockService) {
		console.log('login constructor');
	}

	public ngOnInit() {
		console.log('login init');
	}

	public loginUser(login:string) {
		this.loaderBlockService.show();
		setTimeout(() => {
			this.loginUserEvent.emit();
		}, 400);
	}

	public ngOnDestroy() {
		// unsubscribe here
	}
}
