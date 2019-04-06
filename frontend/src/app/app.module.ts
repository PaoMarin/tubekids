import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import { RegistersService } from './services/registers.service';
import { HttpClientModule } from  '@angular/common/http';
const routes:Route[] = [
  {path: '', component: RegisterComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegistersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
