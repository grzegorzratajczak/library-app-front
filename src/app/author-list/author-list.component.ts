import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from '../Author';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Observable<Author>;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.authors = this.authorService.getAuthorsList();
  }

}
