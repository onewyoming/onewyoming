import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1134Component } from './experiment1134.component';

describe('Experiment1134Component', () => {
  let component: Experiment1134Component;
  let fixture: ComponentFixture<Experiment1134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
