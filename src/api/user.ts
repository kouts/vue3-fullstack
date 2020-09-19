import { http } from '@/common/http';
import { User } from './interfaces';

function fetchUsers() {
  return http.request<void, Array<User>>({
    url: 'users'
  });
}

function fetchUser(id: number) {
  return http.request<void, User>({
    url: 'users/' + id
  });
}

function addUser(user: User) {
  return http.request<void, number>({
    method: 'post',
    url: 'users/add',
    data: user
  });
}

export { fetchUsers, fetchUser, addUser };
