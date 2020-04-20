import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment77Component } from './experiment77.component';

describe('Experiment77Component', () => {
  let component: Experiment77Component;
  let fixture: ComponentFixture<Experiment77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
