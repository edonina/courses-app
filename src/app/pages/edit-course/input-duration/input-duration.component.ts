import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Course } from '../../../core/entities';
import { courseStatusClasses } from '../../../core/enums';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';


export function validateOnlyNumbers(c: FormControl) {

	let err = {
		rangeError: {
			given: c.value,
			max: 10,
			min: 0
		}
	};
	if(!isNaN(parseFloat(c.value)) && isFinite(c.value)){
		console.log('validator is number', c.value);
		return null
	}

	return err;
}

@Component({
	selector: 'input-duration',
	templateUrl: 'input-duration.component.html',
	//styles: [require('./input-duration.styles.scss')],
	styles: [
		`
    :host.ng-touched.ng-invalid ( input) {
       border-left: 5px solid #a94442; /* red */
    }

    :host.ng-touched.ng-valid >>> input {
        border-left: 5px solid #42A948; /* green */
    }
:host /deep/ .ng-invalid {
  border-bottom: solid 3px red;
}
    :host.ng-valid:not([required]).ng-touched.ng-dirty >>> input {
        border-left: 5px solid #42A948; /* green */
    }

    :host.ng-pristine >>> .error-msg {
        display:none;
    }

    :host.ng-valid >>> .error-msg {
        display:none;
    }

    :host.ng-untouched >>> .error-msg {
        display:none;
    }

    :host.ng-touched.ng-invalid >>> .error-msg {
       display:inline;
    }

    .text-danger { font-weight: 500; }
}`],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputDurationComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useValue: validateOnlyNumbers,
			multi: true
		}
	]
})
export class InputDurationComponent implements ControlValueAccessor {
	@Input() public duration: any;

	constructor() {}

	writeValue(value: any) {
		if (value !== undefined) {
			this.duration = value;
		}
	}

	propagateChange = (_: any) => {};

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	private onChange(event) {
		this.duration = event.target.value;
		console.log(event);
		// update the form
		this.propagateChange(event.target.value);
	}


	registerOnTouched(){}
}
