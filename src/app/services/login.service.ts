import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl = "http://localhost:8000/auth/login/"

  constructor(private http: HttpClient) { }

  public loginUser(user: any): Observable<any> {
    return this.http.post<any>(this._loginUrl, user);
  }
}
