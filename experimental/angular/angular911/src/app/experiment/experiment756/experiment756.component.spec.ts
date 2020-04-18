import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment756Component } from './experiment756.component';

describe('Experiment756Component', () => {
  let component: Experiment756Component;
  let fixture: ComponentFixture<Experiment756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
