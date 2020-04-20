import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1321Component } from './experiment1321.component';

describe('Experiment1321Component', () => {
  let component: Experiment1321Component;
  let fixture: ComponentFixture<Experiment1321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
