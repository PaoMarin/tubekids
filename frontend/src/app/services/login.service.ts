import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post('http://localhost:8000/api/login',
    {email: email, password: password});
  }
}
