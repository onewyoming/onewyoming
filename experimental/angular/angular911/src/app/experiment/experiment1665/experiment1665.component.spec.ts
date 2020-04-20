import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1665Component } from './experiment1665.component';

describe('Experiment1665Component', () => {
  let component: Experiment1665Component;
  let fixture: ComponentFixture<Experiment1665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
