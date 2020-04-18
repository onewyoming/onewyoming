import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1501Component } from './experiment1501.component';

describe('Experiment1501Component', () => {
  let component: Experiment1501Component;
  let fixture: ComponentFixture<Experiment1501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
