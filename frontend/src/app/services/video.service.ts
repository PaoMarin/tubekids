import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';
import { Constants } from '../shared/constants';

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {
  }

  read(query = '') {
    return this.http.get(Constants.build_url('videos'), {
      params: { q: query },
      headers: new HttpHeaders(this.headers())
    });
  }

  insert(data: Video) {
    return this.http.post(Constants.build_url('videos'), data, {
      headers: new HttpHeaders(this.headers())
    });
  }

  update(data: Video) {
    return this.http.put(Constants.build_url('videos/' + data.id), data, {
      headers: new HttpHeaders(this.headers())
    });
  }

  delete(id) {
    return this.http.delete(Constants.build_url('videos/' + id), {
      headers: new HttpHeaders(this.headers())
    });
  }

  findById(id) {
    return this.http.get(Constants.build_url('videos/' + id),{
      headers: new HttpHeaders(this.headers())
    
    });
  }

  headers() {
    return {
        'Authorization': 'bearer ' + localStorage.getItem('token')
    }
  }
}
