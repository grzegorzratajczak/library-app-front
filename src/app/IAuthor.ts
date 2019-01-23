import {IBook} from './IBook';

export interface IAuthor {
  id: number;
  authorName: string;
  books: IBook[];
}
