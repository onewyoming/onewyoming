import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1633Component } from './experiment1633.component';

describe('Experiment1633Component', () => {
  let component: Experiment1633Component;
  let fixture: ComponentFixture<Experiment1633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
