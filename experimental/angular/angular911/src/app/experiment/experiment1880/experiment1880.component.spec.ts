import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1880Component } from './experiment1880.component';

describe('Experiment1880Component', () => {
  let component: Experiment1880Component;
  let fixture: ComponentFixture<Experiment1880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
