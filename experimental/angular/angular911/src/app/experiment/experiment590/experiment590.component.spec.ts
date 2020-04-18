import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment590Component } from './experiment590.component';

describe('Experiment590Component', () => {
  let component: Experiment590Component;
  let fixture: ComponentFixture<Experiment590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
