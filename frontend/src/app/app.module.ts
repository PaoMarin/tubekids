import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import { RegistersService } from './services/registers.service';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VideosCrudComponent } from './videos-crud/videos-crud.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes:Route[] = [
  {path: '', component: AppComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideosCrudComponent,
    VideoDetailComponent,
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
    RegistersService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
