interface IItem {
  name: string;
  desc: string;
}

interface IItems {
  items: IItem[];
}

interface IUser {
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

export { IItem, IItems, IUser };
