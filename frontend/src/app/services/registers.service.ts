import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  constructor(private http: HttpClient) { }

    register(email,password,name,last_name,country,birth_date,phone_number){
      return this.http.post('http://localhost:8000/api/register',
      {email: email, password: password, name: name, last_name: last_name, country: country, birth_date: birth_date, phone_number: phone_number});
    }
}
