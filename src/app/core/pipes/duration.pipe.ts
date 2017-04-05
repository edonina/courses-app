import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
	transform(value: number, args: string[]): any {
		if (!value) return value;

		return value;
	}

}
