import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'findPipe'})
export class FindPipe implements PipeTransform {
	transform(value:Object[], arg:string):any {
		//new first
		if (!value) return value;

		var res = value.filter(function (el) {
			return el['title'].toLowerCase().indexOf(arg) >= 0;
		});

		return res;
	}
}
