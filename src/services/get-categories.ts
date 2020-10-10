import response from '../data/response';

export default async () => ({
  categories: response.data.categories,
  rootId: '0',
});
