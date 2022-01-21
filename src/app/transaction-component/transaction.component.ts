import { Component, OnInit } from '@angular/core';
import { Transaction, User, UserTransaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  private userTransaction: UserTransaction | undefined;
  public userDetails: User | undefined;
  public transactions: Transaction[] | undefined;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      res => {
        this.userTransaction = res;
        this.userDetails = this.userTransaction.user;
        this.transactions = this.userTransaction.transactions;
      },
      error => console.error(error)
    )
  }

  public cancelTransaction(): void{
    this.transactionService.cancelTransaction(this.userTransaction!).subscribe(
      res => console.log(res),
      error => console.error(error)
    )
  }

}
