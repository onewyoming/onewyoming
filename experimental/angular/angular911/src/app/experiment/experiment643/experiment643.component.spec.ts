import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment643Component } from './experiment643.component';

describe('Experiment643Component', () => {
  let component: Experiment643Component;
  let fixture: ComponentFixture<Experiment643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
