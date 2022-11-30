import { faker } from '@faker-js/faker';

export const generateId = () => {
  return faker.datatype.uuid();
};
