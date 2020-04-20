import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment806Component } from './experiment806.component';

describe('Experiment806Component', () => {
  let component: Experiment806Component;
  let fixture: ComponentFixture<Experiment806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
