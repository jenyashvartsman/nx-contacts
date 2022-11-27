import { contactsApi } from './contacts-api';

describe('contactsApi', () => {
  it('should work', () => {
    expect(contactsApi()).toEqual('contacts-api');
  });
});
