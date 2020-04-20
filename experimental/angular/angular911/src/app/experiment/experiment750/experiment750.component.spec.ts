import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment750Component } from './experiment750.component';

describe('Experiment750Component', () => {
  let component: Experiment750Component;
  let fixture: ComponentFixture<Experiment750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
