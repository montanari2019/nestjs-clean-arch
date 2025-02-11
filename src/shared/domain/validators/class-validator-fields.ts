import { validateSync } from 'class-validator';
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidatedGeneric>
  implements ValidatorFieldsInterface<PropsValidatedGeneric>
{
  errors: FieldsErrors;
  validatedData: PropsValidatedGeneric;

  validate(data: any): boolean {
    const errorsClassValidator = validateSync(data);

    if (errorsClassValidator.length) {
      this.errors = {};

      for (const error of errorsClassValidator) {
        const filed = error.property;
        this.errors[filed] = Object.values(error.constraints ?? '');
      }
    } else {
      this.validatedData = data;
    }

    return !errorsClassValidator.length;
  }
}
