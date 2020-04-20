import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1555Component } from './experiment1555.component';

describe('Experiment1555Component', () => {
  let component: Experiment1555Component;
  let fixture: ComponentFixture<Experiment1555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
