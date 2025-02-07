import { validate as uuidValidate, validate } from 'uuid';
import { Entity } from '../../entitiy';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit test', () => {
  it('Should set props and id', () => {
    const propsTest: StubProps = {
      prop1: 'test',
      prop2: 123,
    };

    const entity = new StubEntity(propsTest, '');

    expect(entity.props).toStrictEqual(propsTest);

    expect(entity._id).not.toBeNull();

    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const propsTest: StubProps = {
      prop1: 'test',
      prop2: 123,
    };
    const id = 'fc5383f3-acfe-4942-992d-c9a7774b8bf3';

    const entity = new StubEntity(propsTest, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should converter entity to a JavaScriptObject', () => {
    const propsTest: StubProps = {
      prop1: 'test',
      prop2: 123,
    };
    const id = 'fc5383f3-acfe-4942-992d-c9a7774b8bf3';

    const entity = new StubEntity(propsTest, id);

    expect(entity.toJson()).toStrictEqual({
      id,
      ...propsTest,
    });
  });
});
