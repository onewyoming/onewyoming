import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1110Component } from './experiment1110.component';

describe('Experiment1110Component', () => {
  let component: Experiment1110Component;
  let fixture: ComponentFixture<Experiment1110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
