import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1747Component } from './experiment1747.component';

describe('Experiment1747Component', () => {
  let component: Experiment1747Component;
  let fixture: ComponentFixture<Experiment1747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
