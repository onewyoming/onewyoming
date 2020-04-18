import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment990Component } from './experiment990.component';

describe('Experiment990Component', () => {
  let component: Experiment990Component;
  let fixture: ComponentFixture<Experiment990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
