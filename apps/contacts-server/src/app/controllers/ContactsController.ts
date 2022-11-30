import { Contact } from '@nx-contacts/contacts-api';
import { Request, Response } from 'express';
import { createFakeContacts } from '../helpers/FakeData';
import { generateId } from '../helpers/Util';
import { contactValidation } from '../validations/ContactsValidations';

const contacts = createFakeContacts();

const errorObj = (id: string) => ({
  message: `Cannot find contact with id '${id}'`,
});

export const getContacts = (req: Request, res: Response) => {
  res.json(contacts);
};

export const getContact = (req: Request, res: Response) => {
  const contactId = req.params.id;
  const foundContact = contacts.find((contact) => contact.id === contactId);

  if (foundContact) {
    res.json(foundContact);
  } else {
    res.status(404).json(errorObj(contactId));
  }
};

export const addContact = async (req: Request, res: Response) => {
  try {
    const validatedContact: Contact = await contactValidation.validateAsync(
      req.body
    );
    validatedContact.id = generateId();
    contacts.push(validatedContact);
    res.json(validatedContact);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateContact = async (req: Request, res: Response) => {
  const contactToUpdateId = req.params.id;
  const contactToUpdate = contacts.find(
    (contact) => contact.id === contactToUpdateId
  );

  if (contactToUpdate) {
    try {
      const validatedContact: Contact = await contactValidation.validateAsync(
        req.body
      );
      contactToUpdate.name = validatedContact.name;
      contactToUpdate.avatar = validatedContact.avatar;
      res.json(contactToUpdate);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(404).json(errorObj(contactToUpdateId));
  }
};

export const deleteContact = (req: Request, res: Response) => {
  const contactToDeleteId = req.params.id;
  const contactToDeleteIndex = contacts.findIndex(
    (contact) => contact.id === contactToDeleteId
  );

  if (contactToDeleteIndex > 0) {
    const contactToDelete = { ...contacts[contactToDeleteIndex] };
    contacts.splice(contactToDeleteIndex, 1);
    res.json(contactToDelete);
  } else {
    res.status(404).json(errorObj(contactToDeleteId));
  }
};
