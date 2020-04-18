import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment474Component } from './experiment474.component';

describe('Experiment474Component', () => {
  let component: Experiment474Component;
  let fixture: ComponentFixture<Experiment474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
