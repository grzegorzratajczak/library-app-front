import {Component, OnInit, Output} from '@angular/core';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  @Output() authorName: string;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
  }

  save() {
    this.authorService.createAuthor(this.authorName)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    this.save();
  }
}
