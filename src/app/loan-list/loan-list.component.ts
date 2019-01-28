import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Loan} from '../Loan';
import {LoanService} from '../loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loans: Observable<Loan>;

  constructor(private loanService: LoanService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData() {
    this.loans = this.loanService.getLoansList();
  }
}
