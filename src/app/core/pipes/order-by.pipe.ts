import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
	transform(value: Object[], args: any[]): any {
		//new first
		if (!value) return value;

		function compare(a,b) {
			if (a.creationDate > b.creationDate){
				return -1;
			}else if (a.creationDate < b.creationDate){
				return 1;
			}
			return 0;
		}

		value.sort(compare);
		return value;
	}
}
