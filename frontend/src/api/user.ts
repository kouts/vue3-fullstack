import { http } from '@/common/http';
import { IUser } from './interfaces';

function fetchUsers () {
  return http.request<void, Array<IUser>>({
    method: 'get',
    url: 'users'
  });
}

function fetchUser (id: number) {
  return http.request<void, IUser>({
    method: 'get',
    url: 'users/' + id
  });
}

function addUser (user: IUser) {
  return http.request<void, unknown>({
    method: 'post',
    url: 'users',
    data: user
  });
}

function editUser (user: IUser) {
  return http.request<void, unknown>({
    method: 'put',
    url: 'users/' + user.id,
    data: user
  });
}

function deleteUser (id: number) {
  return http.request<void, unknown>({
    method: 'delete',
    url: 'users/' + id
  });
}

export { fetchUsers, fetchUser, addUser, editUser, deleteUser };
