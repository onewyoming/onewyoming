import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment866Component } from './experiment866.component';

describe('Experiment866Component', () => {
  let component: Experiment866Component;
  let fixture: ComponentFixture<Experiment866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
