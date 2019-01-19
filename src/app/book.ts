import {IAuthor} from './author';

export interface IBook {
  id: number;
  bookName: string;
  author: IAuthor;
}
