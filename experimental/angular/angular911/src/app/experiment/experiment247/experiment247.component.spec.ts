import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment247Component } from './experiment247.component';

describe('Experiment247Component', () => {
  let component: Experiment247Component;
  let fixture: ComponentFixture<Experiment247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
