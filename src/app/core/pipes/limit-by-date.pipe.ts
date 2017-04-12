import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitByDate'})
export class LimitByDatePipe implements PipeTransform {
	transform(value: Object[]): any {

		function twoWeeksLimit(a,b) {
			if (a.creationDate > b.creationDate){
				return -1;
			}else if (a.creationDate < b.creationDate){
				return 1;
			}
			return 0;
		}

		//new first
		/*if (!value) return value;

		function compare(a,b) {
			if (a.creationDate > b.creationDate){
				return -1;
			}else if (a.creationDate < b.creationDate){
				return 1;
			}
			return 0;
		}

		value.sort(compare);*/
		return value;
	}
}
