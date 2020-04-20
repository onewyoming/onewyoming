import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment549Component } from './experiment549.component';

describe('Experiment549Component', () => {
  let component: Experiment549Component;
  let fixture: ComponentFixture<Experiment549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
