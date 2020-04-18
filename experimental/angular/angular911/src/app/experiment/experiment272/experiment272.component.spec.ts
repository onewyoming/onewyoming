import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment272Component } from './experiment272.component';

describe('Experiment272Component', () => {
  let component: Experiment272Component;
  let fixture: ComponentFixture<Experiment272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
