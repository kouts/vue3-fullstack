import { http } from '@/common/http';
import { User } from './interfaces';

function fetchUsers() {
  return http.request<void, Array<User>>({
    url: 'users'
  });
}

export { fetchUsers };
