import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1589Component } from './experiment1589.component';

describe('Experiment1589Component', () => {
  let component: Experiment1589Component;
  let fixture: ComponentFixture<Experiment1589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
