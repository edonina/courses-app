import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myOrderBy'})
export class OrderByPipe implements PipeTransform {
	public transform(value: Object[], args: any[]): any {
		// new first
		if (!value) {
			return value;
		}

		function compare(a, b) {
			if (a.date > b.date) {
				return -1;
			} else if (a.date < b.date) {
				return 1;
			}
			return 0;
		}

		value.sort(compare);
		return value;
	}
}
