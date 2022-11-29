import { Request, Response } from 'express';

export const getContacts = (req: Request, res: Response) => {
  res.json([]);
};

export const getContact = (req: Request, res: Response) => {
  return res.json({ id: '123' });
};

export const addContact = (req: Request, res: Response) => {
  res.json({ id: 'new' });
};

export const updateContact = (req: Request, res: Response) => {
  res.json({ id: 'updated' });
};

export const deleteContact = (req: Request, res: Response) => {
  res.json({ id: 'deleted' });
};
