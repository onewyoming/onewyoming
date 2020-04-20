import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment515Component } from './experiment515.component';

describe('Experiment515Component', () => {
  let component: Experiment515Component;
  let fixture: ComponentFixture<Experiment515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
