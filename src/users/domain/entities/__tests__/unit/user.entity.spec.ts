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
});
