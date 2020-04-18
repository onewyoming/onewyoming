import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1493Component } from './experiment1493.component';

describe('Experiment1493Component', () => {
  let component: Experiment1493Component;
  let fixture: ComponentFixture<Experiment1493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
