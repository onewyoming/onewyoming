import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment110Component } from './experiment110.component';

describe('Experiment110Component', () => {
  let component: Experiment110Component;
  let fixture: ComponentFixture<Experiment110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
