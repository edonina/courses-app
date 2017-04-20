import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myLimitByDate'})
export class LimitByDatePipe implements PipeTransform {
	public transform(value: Object[]): any {
		// new first
		if (!value) {
			return value;
		}
		let twoWeeksAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 14;
		return value.filter((el) => {
			/*console.log(el['date'].getTime() > twoWeeksAgo);*/
			return el['date'].getTime() > twoWeeksAgo;
		});
	}
}
