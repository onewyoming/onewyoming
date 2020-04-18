import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment373Component } from './experiment373.component';

describe('Experiment373Component', () => {
  let component: Experiment373Component;
  let fixture: ComponentFixture<Experiment373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
