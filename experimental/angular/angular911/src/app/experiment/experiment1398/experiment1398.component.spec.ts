import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1398Component } from './experiment1398.component';

describe('Experiment1398Component', () => {
  let component: Experiment1398Component;
  let fixture: ComponentFixture<Experiment1398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
