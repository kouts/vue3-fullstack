interface Item {
  name: string;
  desc: string;
}

interface Items {
  items: Item[];
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  birthday: string;
  company: string;
  email: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export { Item, Items, User };