import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment734Component } from './experiment734.component';

describe('Experiment734Component', () => {
  let component: Experiment734Component;
  let fixture: ComponentFixture<Experiment734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
