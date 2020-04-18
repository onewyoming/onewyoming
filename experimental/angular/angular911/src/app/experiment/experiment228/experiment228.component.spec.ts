import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment228Component } from './experiment228.component';

describe('Experiment228Component', () => {
  let component: Experiment228Component;
  let fixture: ComponentFixture<Experiment228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
