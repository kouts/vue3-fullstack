import { http } from '@/common/http';
import { IItems } from './interfaces';

function fetchItems () {
  return http.request<void, IItems>({
    url: 'items/all'
  });
}

export { fetchItems };
