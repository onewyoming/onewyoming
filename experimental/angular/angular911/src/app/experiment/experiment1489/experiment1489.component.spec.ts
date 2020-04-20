import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1489Component } from './experiment1489.component';

describe('Experiment1489Component', () => {
  let component: Experiment1489Component;
  let fixture: ComponentFixture<Experiment1489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
