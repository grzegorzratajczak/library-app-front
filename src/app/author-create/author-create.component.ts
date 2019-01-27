import {Component, OnInit} from '@angular/core';
import {Author} from '../Author';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author: Author;
  submitted = false;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.newAuthor();
  }

  newAuthor(): void {
    this.submitted = false;
    this.author = new Author();
  }

  save() {
    this.authorService.createAuthor(this.author)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
