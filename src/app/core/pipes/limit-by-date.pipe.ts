import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitByDate'})
export class LimitByDatePipe implements PipeTransform {
	transform(value: Object[]): any {
		//new first
		if (!value) return value;
		let twoWeeksAgo = new Date((new Date().getTime() - 1000 * 60 * 60 * 24 * 14)).getTime();
		return value.filter((el) => {
			console.log(el['creationDate'].getTime() > twoWeeksAgo);
			return el['creationDate'].getTime() > twoWeeksAgo;
		});
	}
}
