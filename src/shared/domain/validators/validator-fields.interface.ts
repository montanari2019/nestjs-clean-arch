export type FieldsErrors = {
  [filed: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidatedGeneric> {
  errors: FieldsErrors;
  validatedData: PropsValidatedGeneric;
  validate: (data: any) => boolean;
}
