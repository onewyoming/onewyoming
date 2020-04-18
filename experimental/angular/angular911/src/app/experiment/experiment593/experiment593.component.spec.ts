import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment593Component } from './experiment593.component';

describe('Experiment593Component', () => {
  let component: Experiment593Component;
  let fixture: ComponentFixture<Experiment593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
