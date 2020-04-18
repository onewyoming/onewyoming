import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment472Component } from './experiment472.component';

describe('Experiment472Component', () => {
  let component: Experiment472Component;
  let fixture: ComponentFixture<Experiment472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
