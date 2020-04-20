import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1779Component } from './experiment1779.component';

describe('Experiment1779Component', () => {
  let component: Experiment1779Component;
  let fixture: ComponentFixture<Experiment1779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
