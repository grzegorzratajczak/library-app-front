import {Component, Input, OnInit} from '@angular/core';
import {Loan} from '../Loan';
import {LoanService} from '../loan.service';
import {LoanListComponent} from '../loan-list/loan-list.component';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  @Input() loan: Loan;

  constructor(private loanService: LoanService, private loanListComponent: LoanListComponent) {
  }

  ngOnInit() {
  }

  endLoan() {

  }

  deleteLoan() {

  }
}
