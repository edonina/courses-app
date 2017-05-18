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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
	loginForm : FormGroup;

	constructor(private loaderBlockService:LoaderBlockService, fb: FormBuilder) {
		console.log('login constructor');
		this.loginForm = fb.group({
			'email' : [null],
			'password': [null],
			/*'email' : [null, Validators.required],
			'password': [null, Validators.required],*/
		})
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
