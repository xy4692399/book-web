import {Library} from './library';

export class Page {
  currentPage: number;
  totalPage: number;
  hasNextPage: boolean;
  pageSize: number;
  total: number;
  data: Library;
}
