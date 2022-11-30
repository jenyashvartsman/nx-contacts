import { Router } from 'express';
import * as contactsController from '../controllers/ContactsController';

const router = Router();

router
  .get('/', contactsController.getContacts)
  .post('/', contactsController.addContact);
router
  .get('/:id', contactsController.getContact)
  .put('/:id', contactsController.updateContact)
  .delete('/:id', contactsController.deleteContact);

export default router;
