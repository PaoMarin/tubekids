import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

    insert(email, password, name, last_name,country,birth_date,phone_number) {
      return this.http.post(Constants.build_url('register'), {email: email, password: password, name: name, last_name: last_name, 
        country: country, birth_date: birth_date, phone_number: phone_number,
        headers: new HttpHeaders(this.headers())
      });
    }
    
  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials': 'true'
    }
  }
}
