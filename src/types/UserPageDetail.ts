interface Address {
  city: string;
}

interface Company {
  name: string;
}

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
  address: Address;
  company: Company;
}
export interface UserInfo {
  user: User | undefined;
}
