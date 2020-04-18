import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment485Component } from './experiment485.component';

describe('Experiment485Component', () => {
  let component: Experiment485Component;
  let fixture: ComponentFixture<Experiment485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
