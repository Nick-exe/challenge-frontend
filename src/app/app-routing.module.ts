import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login-component/login.component';
import { TransactionComponent } from './transaction-component/transaction.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'transaction', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
