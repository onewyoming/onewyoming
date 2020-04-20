import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment83Component } from './experiment83.component';

describe('Experiment83Component', () => {
  let component: Experiment83Component;
  let fixture: ComponentFixture<Experiment83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
