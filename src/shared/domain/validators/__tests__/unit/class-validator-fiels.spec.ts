import * as LibClassValidate from 'class-validator';
import { ClassValidatorFields } from '../../class-validator-fields';

class StubClassValidatorFields extends ClassValidatorFields<{
  filed: string;
}> {}

describe('Class Validator Fields Unit Test', () => {
  it('should initialize erros end validate', () => {
    const sut = new StubClassValidatorFields();
    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('should validate with erros', () => {
    const spyValidadeSync = jest.spyOn(LibClassValidate, 'validateSync');
    const dataMoker = {
      property: 'field',
      constraints: {
        isNotEmpty: 'Is not empty test mock',
      },
    };
    spyValidadeSync.mockReturnValue([dataMoker]);

    const sut = new StubClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();

    expect(spyValidadeSync).toHaveBeenCalled();

    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toStrictEqual({
      field: ['Is not empty test mock'],
    });
  });

  it('should validate without erros', () => {
    const spyValidadeSync = jest.spyOn(LibClassValidate, 'validateSync');

    spyValidadeSync.mockReturnValue([]);

    const sut = new StubClassValidatorFields();
    const dataValidate = {
      field: 'Value teste',
    };

    expect(sut.validate(dataValidate)).toBeTruthy();

    expect(spyValidadeSync).toHaveBeenCalled();

    expect(sut.validatedData).toStrictEqual(dataValidate);
    expect(sut.errors).toBeNull();
  });
});
