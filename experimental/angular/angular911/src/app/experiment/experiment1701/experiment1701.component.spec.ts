import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1701Component } from './experiment1701.component';

describe('Experiment1701Component', () => {
  let component: Experiment1701Component;
  let fixture: ComponentFixture<Experiment1701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
