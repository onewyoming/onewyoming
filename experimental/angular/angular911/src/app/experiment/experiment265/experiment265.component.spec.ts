import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment265Component } from './experiment265.component';

describe('Experiment265Component', () => {
  let component: Experiment265Component;
  let fixture: ComponentFixture<Experiment265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
