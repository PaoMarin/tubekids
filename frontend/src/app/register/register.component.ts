import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
   email: string;
   password: string;
   name:string;
   last_name:string;
   country:string;
   birth_date:Date;
   phone_number:number;

  constructor( private service: RegisterService) { }

  ngOnInit() {
  }

  register(){
    this.service.insert(this.email, this.password, this.name, this.last_name, this.country,
      this.birth_date, this.phone_number);
  }
}
