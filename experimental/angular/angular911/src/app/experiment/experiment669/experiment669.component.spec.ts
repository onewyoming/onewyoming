import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment669Component } from './experiment669.component';

describe('Experiment669Component', () => {
  let component: Experiment669Component;
  let fixture: ComponentFixture<Experiment669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
