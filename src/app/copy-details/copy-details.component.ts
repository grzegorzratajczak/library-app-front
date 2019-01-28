import {Component, Input, OnInit} from '@angular/core';
import {Copy} from '../Copy';
import {CopyService} from '../copy.service';
import {CopyListComponent} from '../copy-list/copy-list.component';

@Component({
  selector: 'app-copy-details',
  templateUrl: './copy-details.component.html',
  styleUrls: ['./copy-details.component.css']
})
export class CopyDetailsComponent implements OnInit {

  @Input() copy: Copy;

  constructor(private copyService: CopyService, private copyListComponent: CopyListComponent) {
  }

  ngOnInit() {
  }

  loanCopy() {

  }

  deleteCopy() {

  }
}
