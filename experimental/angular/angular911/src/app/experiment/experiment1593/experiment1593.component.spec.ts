import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1593Component } from './experiment1593.component';

describe('Experiment1593Component', () => {
  let component: Experiment1593Component;
  let fixture: ComponentFixture<Experiment1593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
