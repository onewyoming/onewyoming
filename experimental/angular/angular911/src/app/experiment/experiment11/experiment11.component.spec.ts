import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment11Component } from './experiment11.component';

describe('Experiment11Component', () => {
  let component: Experiment11Component;
  let fixture: ComponentFixture<Experiment11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
