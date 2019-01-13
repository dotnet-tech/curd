import { AbstractControl } from '@angular/forms';

export function LessthenZero(control: AbstractControl) {
    if (control.value <= 0) {
        return { lessthenZero: true };
    }
    return null;
}