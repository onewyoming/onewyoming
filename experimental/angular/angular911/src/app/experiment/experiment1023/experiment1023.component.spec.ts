import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1023Component } from './experiment1023.component';

describe('Experiment1023Component', () => {
  let component: Experiment1023Component;
  let fixture: ComponentFixture<Experiment1023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
