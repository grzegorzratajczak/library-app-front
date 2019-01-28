import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Copy} from '../Copy';
import {CopyService} from '../copy.service';

@Component({
  selector: 'app-copy-list',
  templateUrl: './copy-list.component.html',
  styleUrls: ['./copy-list.component.css']
})
export class CopyListComponent implements OnInit {

  copies: Observable<Copy>;

  constructor(private copyService: CopyService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.copies = this.copyService.getCopiesList();
  }
}
