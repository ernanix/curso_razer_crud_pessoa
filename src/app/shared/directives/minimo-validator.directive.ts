import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective implements Validator {

  @Input("valorminimo") valorminimo: string = "0"

  constructor() { }
  validate(control: FormControl) {
    let v: number = +control.value;

    if(isNaN(v) || v < +this.valorminimo) {
      return { 'minimo' : true, 'requiredValue':16}
    }
    return null;

  }

}
