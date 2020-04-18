import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment799Component } from './experiment799.component';

describe('Experiment799Component', () => {
  let component: Experiment799Component;
  let fixture: ComponentFixture<Experiment799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
