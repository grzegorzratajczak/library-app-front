import {IAuthor} from './IAuthor';

export interface IBook {
  id: number;
  bookName: string;
  author: IAuthor;
}
