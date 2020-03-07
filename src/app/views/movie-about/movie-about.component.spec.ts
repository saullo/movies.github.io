import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAboutComponent } from './movie-about.component';

describe('MovieAboutComponent', () => {
  let component: MovieAboutComponent;
  let fixture: ComponentFixture<MovieAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
