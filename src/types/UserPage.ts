interface Users {
  id: string;
  name: string;
  username: string;
  email: string;
}
interface Photos {
  id: string;
  thumbnailUrl: string;
  url: string;
  title: string;
}

export interface Home {
  users: Users[] | [];
  photos: Photos[] | [];
}
