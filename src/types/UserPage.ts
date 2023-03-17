interface Users {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface Home {
  users: Users[] | [];
}
