import { http } from '@/common/http';
import { User } from './interfaces';

function fetchUsers() {
  return http.request<void, Array<User>>({
    method: 'get',
    url: 'users'
  });
}

function fetchUser(id: number) {
  return http.request<void, User>({
    method: 'get',
    url: 'users/' + id
  });
}

function addUser(user: User) {
  return http.request<void, unknown>({
    method: 'post',
    url: 'users',
    data: user
  });
}

function editUser(user: User) {
  return http.request<void, unknown>({
    method: 'put',
    url: 'users/' + user.id,
    data: user
  });
}

function deleteUser(id: number) {
  return http.request<void, unknown>({
    method: 'delete',
    url: 'users/' + id
  });
}

export { fetchUsers, fetchUser, addUser, editUser, deleteUser };
