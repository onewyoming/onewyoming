import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment273Component } from './experiment273.component';

describe('Experiment273Component', () => {
  let component: Experiment273Component;
  let fixture: ComponentFixture<Experiment273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
