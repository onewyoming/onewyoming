import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment571Component } from './experiment571.component';

describe('Experiment571Component', () => {
  let component: Experiment571Component;
  let fixture: ComponentFixture<Experiment571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
