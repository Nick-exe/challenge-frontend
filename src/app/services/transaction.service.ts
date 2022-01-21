import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTransaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionUrl = 'http://localhost:8000/transaction/';

  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<UserTransaction> {
    return this.http.get<UserTransaction>(
      this.transactionUrl + 'get-transactions/'
    );
  }

  public cancelTransaction(transaction: UserTransaction): Observable<any> {
    return this.http.post<UserTransaction>(
      this.transactionUrl + 'cancel-transaction/',
      transaction
    );
  }
}
