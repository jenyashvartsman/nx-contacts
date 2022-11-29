import { Router } from 'express';
const router = Router();
import * as contactsController from '../controllers/ContactController';

router
  .get('/', contactsController.getContacts)
  .post('/', contactsController.addContact);
router
  .get('/:id', contactsController.getContact)
  .put('/:id', contactsController.updateContact)
  .delete('/:id', contactsController.deleteContact);

export default router;
