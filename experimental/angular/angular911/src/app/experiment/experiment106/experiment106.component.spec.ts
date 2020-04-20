import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment106Component } from './experiment106.component';

describe('Experiment106Component', () => {
  let component: Experiment106Component;
  let fixture: ComponentFixture<Experiment106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
