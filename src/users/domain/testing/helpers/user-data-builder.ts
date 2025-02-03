import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  password?: string;
  created_at?: Date;
};

export function UserDataBuilder(props: Props): UserProps {
  const defaultProps: UserProps = {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    created_at: props.created_at ?? new Date(),
  };

  return defaultProps;
}
