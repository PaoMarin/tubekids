import { Component, OnInit } from '@angular/core';
import { Video } from '../services/video';
import { VideoService } from '../services/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  video: Video;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: VideoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.service.findById(params['id']).subscribe(res => res);
    });
  }
}
