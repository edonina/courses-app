import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { LoaderBlockService } from '../../services';

@Component({
	selector: 'loader-block',
	templateUrl: 'loader-block.component.html',
	styles: [require('./loader-block.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoaderBlockComponent implements OnInit {
	/*@Input() public isAuth:boolean;
	@Output() public logoutUserEvent:EventEmitter<number> = new EventEmitter<number>();*/

	// public showLoader: boolean;
	public showLoader: Observable<boolean>;

	constructor(private loaderBlockServiceService: LoaderBlockService) {
		// this.showLoader = loaderBlockServiceService.showLoader$;
		// this.showLoader = false;


		/*loaderBlockServiceService.showLoader$.subscribe((newBool: boolean) => {
			this.showLoader = newBool;
			console.log('from the loader-blok comp: ', newBool, this.showLoader);
		});*/

	}

	ngOnInit() {
		this.showLoader = this.loaderBlockServiceService.showLoader$;
	}

}
