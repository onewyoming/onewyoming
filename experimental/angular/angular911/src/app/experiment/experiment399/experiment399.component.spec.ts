import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment399Component } from './experiment399.component';

describe('Experiment399Component', () => {
  let component: Experiment399Component;
  let fixture: ComponentFixture<Experiment399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
