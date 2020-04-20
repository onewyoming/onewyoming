import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment117Component } from './experiment117.component';

describe('Experiment117Component', () => {
  let component: Experiment117Component;
  let fixture: ComponentFixture<Experiment117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
