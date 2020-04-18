import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment207Component } from './experiment207.component';

describe('Experiment207Component', () => {
  let component: Experiment207Component;
  let fixture: ComponentFixture<Experiment207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
