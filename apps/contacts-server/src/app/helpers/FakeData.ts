import { Contact } from '@nx-contacts/contacts-api';
import { faker } from '@faker-js/faker';

export const createFakeContacts = (): Contact[] => {
  return Array.from({ length: 10 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
    },
  }));
};
