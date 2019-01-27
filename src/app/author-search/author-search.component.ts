import {Component, OnInit} from '@angular/core';
import {Author} from '../Author';
import {AuthorService} from '../author.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent implements OnInit {

  authorName: string;
  authors: Observable<Object>;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorName = '';
  }

  private searchAuthor() {
    this.authors = this.authorService.getAuthorByAuthorName(this.authorName);
  }

  onSubmit() {
    this.searchAuthor();
  }
}
