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
	public model: {};

	constructor(private loaderBlockService:LoaderBlockService) {
		console.log('login constructor');
	}

	public ngOnInit() {
		console.log('login init');
	}

	public loginUser(model) {
		this.loaderBlockService.show();
		console.log('====', model);
		setTimeout(() => {
			this.loginUserEvent.emit(model);
		}, 400);



	}

	public ngOnDestroy() {
		// unsubscribe here
	}
}
