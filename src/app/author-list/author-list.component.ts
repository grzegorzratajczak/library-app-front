import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IAuthor} from '../author';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Observable<IAuthor>;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.authors = this.authorService.getAuthorsList();
  }

}
