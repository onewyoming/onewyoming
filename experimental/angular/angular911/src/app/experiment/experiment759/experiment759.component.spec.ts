import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment759Component } from './experiment759.component';

describe('Experiment759Component', () => {
  let component: Experiment759Component;
  let fixture: ComponentFixture<Experiment759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
