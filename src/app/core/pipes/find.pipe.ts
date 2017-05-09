import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myFindPipe'})
export class FindPipe implements PipeTransform {
	public transform(value: Object[], arg: string): any {
		// new first
		if (!value) {
			return value;
		}

		let res = value.filter((el) => {
			return el['title'].toLowerCase().indexOf(arg) >= 0;
		});

		return res;
	}
}
