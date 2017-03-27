import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { LoaderBlockService } from '../../services';

@Component({
	selector: 'loader-block',
	templateUrl: 'loader-block.component.html',
	styles: [require('./loader-block.styles.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoaderBlockComponent {
	/*@Input() public isAuth:boolean;
	@Output() public logoutUserEvent:EventEmitter<number> = new EventEmitter<number>();*/

	public showLoader:boolean;

	constructor(private loaderBlockServiceService:LoaderBlockService) {
		//this.showLoader = false;
		loaderBlockServiceService.showLoader$.subscribe((newBool: boolean) => { this.showLoader = newBool;
		console.log(newBool);
		});

	}

}
