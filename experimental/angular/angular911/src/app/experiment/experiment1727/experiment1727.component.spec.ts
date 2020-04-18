import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1727Component } from './experiment1727.component';

describe('Experiment1727Component', () => {
  let component: Experiment1727Component;
  let fixture: ComponentFixture<Experiment1727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
