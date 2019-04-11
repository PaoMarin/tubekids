import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.email, this.password)
    //.subscribe(res => {
      //let data = res. json();
      //localStorage.setItem('token', data.token);
    //});
  }

}
