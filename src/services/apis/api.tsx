import axios from 'axios';

export function getCategory(params: string) {
  return axios.get(`https://localhost:7029/api/categories/${params}`).then(res => res);
}

export function postCategory(params: any) {
  return axios.post('https://localhost:7029/api/categories/', params).then(res => res);
}

export function putCategory(params: any) {
  return axios.put('https://localhost:7029/api/categories/', params).then(res => res);
}

export function deleteCategory(params: any) {
  return axios.delete('https://localhost:7029/api/categories/', params).then(res => res);
}
