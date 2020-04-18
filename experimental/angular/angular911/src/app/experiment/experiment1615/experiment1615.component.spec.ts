import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1615Component } from './experiment1615.component';

describe('Experiment1615Component', () => {
  let component: Experiment1615Component;
  let fixture: ComponentFixture<Experiment1615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
