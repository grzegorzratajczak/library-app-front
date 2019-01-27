import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../Book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<Book>;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData() {
    this.books = this.bookService.getBooksList();
  }
}
