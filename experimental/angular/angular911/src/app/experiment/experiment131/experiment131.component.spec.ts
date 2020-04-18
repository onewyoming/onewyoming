import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment131Component } from './experiment131.component';

describe('Experiment131Component', () => {
  let component: Experiment131Component;
  let fixture: ComponentFixture<Experiment131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
