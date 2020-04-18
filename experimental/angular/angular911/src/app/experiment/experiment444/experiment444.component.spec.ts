import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment444Component } from './experiment444.component';

describe('Experiment444Component', () => {
  let component: Experiment444Component;
  let fixture: ComponentFixture<Experiment444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
