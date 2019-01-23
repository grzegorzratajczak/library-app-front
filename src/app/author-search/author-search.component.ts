import {Component, OnInit} from '@angular/core';
import {IAuthor} from '../IAuthor';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent implements OnInit {

  authorName: string;
  authors: IAuthor[];

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorName = '';
  }

  private searchAuthor() {
    this.authorService.getAuthorByAuthorName(this.authorName);
//      .subscribe(authors => this.authors = authors);
  }

  onSubmit() {
    this.searchAuthor();
  }
}
