import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDuration'})
export class DurationPipe implements PipeTransform {
	public transform(value: any, args: any[]): any {
		let valueString: string;
		let minString: string;

		if (!value) {
			return value;
		}

		let h = value / 60 ^ 0;
		if (h) {
			let m = value % 60;
			if (m < 10) {
				minString = '0' + m;
			}
			valueString = h + 'h ' + m + 'm';
		} else {
			valueString = value + 'm';
		}

		return valueString;
	}

}
