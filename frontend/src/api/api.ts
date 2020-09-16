import { http } from '@/common/http';
import { Items } from './interfaces';

function fetchItems() {
  return http.request<void, Items>({
    url: 'items/all'
  });
}

export { fetchItems };
