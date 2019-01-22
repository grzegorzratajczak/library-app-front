import {Component, OnInit} from '@angular/core';
import {IAuthor} from '../author';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent implements OnInit {

  fullName: string;
  authors: IAuthor[];

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.fullName = '';
  }

  private searchAuthor() {
    this.authorService.getAuthorByFullName(this.fullName);
//      .subscribe(authors => this.authors = authors);
  }

  onSubmit() {
    this.searchAuthor();
  }
}
