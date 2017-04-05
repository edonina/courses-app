import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
	transform(value: any, args: any[]): any {
		let valueString: string;
		let minString: string;

		if (!value) return value;

		var h = value / 60 ^ 0;
		if (h) {
			var m = value % 60;
			if (m < 10) minString = '0' + m;
			valueString = h + 'h ' + m + 'm';
		} else {
			valueString = value + 'm';
		}

		return valueString;
	}

}
