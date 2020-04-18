import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment802Component } from './experiment802.component';

describe('Experiment802Component', () => {
  let component: Experiment802Component;
  let fixture: ComponentFixture<Experiment802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
