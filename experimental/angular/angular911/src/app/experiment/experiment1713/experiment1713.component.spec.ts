import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1713Component } from './experiment1713.component';

describe('Experiment1713Component', () => {
  let component: Experiment1713Component;
  let fixture: ComponentFixture<Experiment1713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
