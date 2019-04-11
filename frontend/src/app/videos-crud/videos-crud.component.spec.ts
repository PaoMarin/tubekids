import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCrudComponent } from './videos-crud.component';

describe('VideosCrudComponent', () => {
  let component: VideosCrudComponent;
  let fixture: ComponentFixture<VideosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
