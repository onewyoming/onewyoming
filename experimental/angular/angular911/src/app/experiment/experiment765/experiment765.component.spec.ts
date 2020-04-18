import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment765Component } from './experiment765.component';

describe('Experiment765Component', () => {
  let component: Experiment765Component;
  let fixture: ComponentFixture<Experiment765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
