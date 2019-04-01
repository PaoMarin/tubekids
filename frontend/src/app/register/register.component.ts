import { Component, OnInit } from '@angular/core';
import { RegistersService } from '../services/registers.service';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 API_ENDOPOINT = 'http://localhost:8000/api/users';
  constructor( private registerService: RegistersService, private HttpClient: HttpClient) { }

  ngOnInit() {
  }

}
