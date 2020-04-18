import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment739Component } from './experiment739.component';

describe('Experiment739Component', () => {
  let component: Experiment739Component;
  let fixture: ComponentFixture<Experiment739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
