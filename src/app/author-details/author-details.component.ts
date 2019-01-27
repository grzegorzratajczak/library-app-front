import {Component, Input, OnInit} from '@angular/core';
import {Author} from '../Author';
import {AuthorService} from '../author.service';
import {AuthorListComponent} from '../author-list/author-list.component';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  @Input() author: Author;

  constructor(private authorService: AuthorService, private authorListComponent: AuthorListComponent) {
  }

  ngOnInit() {
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.author.id)
      .subscribe(
        data => {
          console.log(data);
          this.authorListComponent.reloadData();
        },
        error => console.log(error));
  }

  getBooksByAuthor() {
    this.authorService.getAuthor(this.author.id)
      .subscribe(
        data => {
          console.log(data);
          this.authorListComponent.reloadData();
        },
        error => console.log(error)
      );
  }

}
