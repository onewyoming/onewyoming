import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment682Component } from './experiment682.component';

describe('Experiment682Component', () => {
  let component: Experiment682Component;
  let fixture: ComponentFixture<Experiment682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
