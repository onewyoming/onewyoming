import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1679Component } from './experiment1679.component';

describe('Experiment1679Component', () => {
  let component: Experiment1679Component;
  let fixture: ComponentFixture<Experiment1679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
