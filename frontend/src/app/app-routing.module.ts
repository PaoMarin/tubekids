import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideosCrudComponent } from './videos-crud/videos-crud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'videos', component: VideosCrudComponent },
  { path: 'videos/:id', component: VideoDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
