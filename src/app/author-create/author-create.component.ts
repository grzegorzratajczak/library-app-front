import {Component, OnInit} from '@angular/core';
import {IAuthor} from '../author';
import {IBook} from '../book';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author: IAuthor = new class implements IAuthor {
    books: IBook[];
    fullName: string;
    id: number;
  }();
  submitted = false;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
  }

  newAuthor(): void {
    this.submitted = false;
    this.author = new class implements IAuthor {
      books: IBook[];
      fullName: string;
      id: number;
    }();
  }

  save() {
    this.authorService.createAuthor(this.author)
      .subscribe(data => console.log(data), error => console.log(error));
    this.author = new class implements IAuthor {
      books: IBook[];
      fullName: string;
      id: number;
    }();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
