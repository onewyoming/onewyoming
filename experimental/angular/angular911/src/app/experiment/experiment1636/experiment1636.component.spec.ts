import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1636Component } from './experiment1636.component';

describe('Experiment1636Component', () => {
  let component: Experiment1636Component;
  let fixture: ComponentFixture<Experiment1636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
