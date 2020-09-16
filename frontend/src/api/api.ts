/*
import { request } from '@/common/request';

export const fetchItems = () => {
  return request({
    url: 'items/all'
  });
};
*/

import { mande, defaults } from 'mande';
import { Items } from './interfaces';

const items = mande('/api/items', defaults);

function fetchItems() {
  return items.get<Items>('all');
}

export { fetchItems };
