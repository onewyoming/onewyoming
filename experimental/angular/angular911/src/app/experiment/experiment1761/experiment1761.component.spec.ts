import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1761Component } from './experiment1761.component';

describe('Experiment1761Component', () => {
  let component: Experiment1761Component;
  let fixture: ComponentFixture<Experiment1761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
