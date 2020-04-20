import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment650Component } from './experiment650.component';

describe('Experiment650Component', () => {
  let component: Experiment650Component;
  let fixture: ComponentFixture<Experiment650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
