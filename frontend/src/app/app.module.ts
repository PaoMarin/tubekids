import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VideosCrudComponent } from './videos-crud/videos-crud.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

import { VideoService } from './services/video.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideosCrudComponent,
    VideoDetailComponent,
    RegisterComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    VideoService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
