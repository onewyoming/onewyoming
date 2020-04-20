import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment744Component } from './experiment744.component';

describe('Experiment744Component', () => {
  let component: Experiment744Component;
  let fixture: ComponentFixture<Experiment744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
