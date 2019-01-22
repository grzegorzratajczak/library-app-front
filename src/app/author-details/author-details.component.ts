import {Component, Input, OnInit} from '@angular/core';
import {IAuthor} from '../author';
import {AuthorService} from '../author.service';
import {AuthorListComponent} from '../author-list/author-list.component';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  @Input() author: IAuthor;

  constructor(private authorService: AuthorService, private listComponent: AuthorListComponent) { }

  ngOnInit() {
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.author.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
