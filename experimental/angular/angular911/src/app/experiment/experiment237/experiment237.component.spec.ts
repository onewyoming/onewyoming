import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment237Component } from './experiment237.component';

describe('Experiment237Component', () => {
  let component: Experiment237Component;
  let fixture: ComponentFixture<Experiment237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
