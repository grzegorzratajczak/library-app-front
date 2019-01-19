import {IBook} from './book';

export interface IAuthor {
  id: number;
  fullName: string;
  books: IBook[];
}
