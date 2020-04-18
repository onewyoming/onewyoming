import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1554Component } from './experiment1554.component';

describe('Experiment1554Component', () => {
  let component: Experiment1554Component;
  let fixture: ComponentFixture<Experiment1554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
