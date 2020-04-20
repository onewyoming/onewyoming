import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1719Component } from './experiment1719.component';

describe('Experiment1719Component', () => {
  let component: Experiment1719Component;
  let fixture: ComponentFixture<Experiment1719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
