import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videos-crud',
  templateUrl: './videos-crud.component.html',
  styleUrls: ['./videos-crud.component.css']
})
export class VideosCrudComponent implements OnInit {
  

  data: Video[];
  current_video: Video;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';
   
  constructor(private service: VideoService) {}
  
   /*
  ngOnInit() {
    this.service.read(this.query).subscribe((res:Response) => { 
      this.data = res.json();
      this.current_video = new Video();
      });
      
  }*/

  ngOnInit(){
   this.service.getAllVideos().subscribe((current_video:Video) => (this.current_video = current_video));
  }

  
  new() {
    this.current_video = new Video();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_video = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.current_video).subscribe(res => {
        this.current_video = new Video();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_video).subscribe(res => {
      this.current_video = new Video();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }
}
