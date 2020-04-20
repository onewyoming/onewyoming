import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment371Component } from './experiment371.component';

describe('Experiment371Component', () => {
  let component: Experiment371Component;
  let fixture: ComponentFixture<Experiment371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
