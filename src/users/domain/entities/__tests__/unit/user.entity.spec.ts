import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit test', () => {
  let props: UserProps;
  let systemUnderTest: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});

    systemUnderTest = new UserEntity(props);
  });

  it('Contructor method', () => {
    expect(systemUnderTest.props.name).toEqual(props.name);
    expect(systemUnderTest.props.email).toEqual(props.email);
    expect(systemUnderTest.props.password).toEqual(props.password);
    expect(systemUnderTest.props.created_at).toBeInstanceOf(Date);
  });

  it('Name getter of filed method', () => {
    expect(systemUnderTest.props.name).toBeDefined();
    expect(systemUnderTest.props.name).toEqual(props.name);
    expect(typeof systemUnderTest.props.name).toBe('string');
  });
  it('Name Setter of filed method', () => {
    const oderName = 'oder name';
    systemUnderTest['name'] = oderName;
    expect(systemUnderTest.props.name).toEqual(oderName);
    expect(typeof systemUnderTest.props.name).toBe('string');
  });

  it('Email getter of filed method', () => {
    expect(systemUnderTest.props.email).toBeDefined();
    expect(systemUnderTest.props.email).toEqual(props.email);
    expect(typeof systemUnderTest.props.email).toBe('string');
  });
  it('PassWord getter of filed method', () => {
    expect(systemUnderTest.props.password).toBeDefined();
    expect(systemUnderTest.props.password).toEqual(props.password);
    expect(typeof systemUnderTest.props.password).toBe('string');
  });

  it('PassWord Setter of filed method', () => {
    const oderPassWord = 'oder PassWord';
    systemUnderTest['password'] = oderPassWord;
    expect(systemUnderTest.props.password).toEqual(oderPassWord);
    expect(typeof systemUnderTest.props.password).toBe('string');
  });
  it('Created At getter of filed method', () => {
    expect(systemUnderTest.props.created_at).toBeDefined();
    expect(systemUnderTest.props.created_at).toBeInstanceOf(Date);
  });

  it('Update user name', () => {
    const newName = 'new Name Test';

    systemUnderTest.updateName(newName);

    expect(systemUnderTest.props.name).toEqual(newName);
  });
  it('Update user password', () => {
    const newPassoword = '@vaquinhaamarela1234';

    systemUnderTest.updatePassword(newPassoword);

    expect(systemUnderTest.props.password).toEqual(newPassoword);
  });
});
