import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1935Component } from './experiment1935.component';

describe('Experiment1935Component', () => {
  let component: Experiment1935Component;
  let fixture: ComponentFixture<Experiment1935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
