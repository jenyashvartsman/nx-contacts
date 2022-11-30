export interface Contact {
  id?: string;
  name: string;
  avatar: string;
  phone: string;
  email?: string;
  address?: ContactAddress;
}

export interface ContactAddress {
  street?: string;
  city?: string;
  country?: string;
}
