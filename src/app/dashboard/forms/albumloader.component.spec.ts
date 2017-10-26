import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumloaderComponent } from './albumloader.component';

describe('AlbumloaderComponent', () => {
  let component: AlbumloaderComponent;
  let fixture: ComponentFixture<AlbumloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
