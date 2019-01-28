import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Book';
import {BookService} from '../book.service';
import {BookListComponent} from '../book-list/book-list.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  constructor(private bookService: BookService, private bookListComponent: BookListComponent) {
  }

  ngOnInit() {
  }

  getCopys() {

  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id)
      .subscribe(data => {
          console.log(data);
          this.bookListComponent.reloadData();
        },
        error => console.log(error));
  }
}
