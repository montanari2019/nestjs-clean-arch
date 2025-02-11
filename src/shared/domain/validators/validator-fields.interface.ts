export type FieldsErrors = {
  [filed: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidatedGeneric> {
  errors: FieldsErrors | null;
  validatedData: PropsValidatedGeneric | null;
  validate: (data: any) => boolean;
}
