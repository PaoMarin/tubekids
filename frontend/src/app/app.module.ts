import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VideosCrudComponent } from './videos-crud/videos-crud.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

import { VideoService } from './services/video.service';
import { LoginService } from './services/login.service';
import { RegistersService } from './services/registers.service';





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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RegistersService,
    VideoService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
