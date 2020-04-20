import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment72Component } from './experiment72.component';

describe('Experiment72Component', () => {
  let component: Experiment72Component;
  let fixture: ComponentFixture<Experiment72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
