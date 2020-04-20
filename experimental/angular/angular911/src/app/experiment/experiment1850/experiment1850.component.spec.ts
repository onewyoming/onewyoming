import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1850Component } from './experiment1850.component';

describe('Experiment1850Component', () => {
  let component: Experiment1850Component;
  let fixture: ComponentFixture<Experiment1850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
