import { UserEntity, UserProps } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity unit test', () => {
  let props: UserProps;
  let systemUnderTest: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

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
  it('Created At getter of filed method', () => {
    expect(systemUnderTest.props.created_at).toBeDefined();
    expect(systemUnderTest.props.created_at).toBeInstanceOf(Date);
  });
});
