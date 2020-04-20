import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment617Component } from './experiment617.component';

describe('Experiment617Component', () => {
  let component: Experiment617Component;
  let fixture: ComponentFixture<Experiment617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
