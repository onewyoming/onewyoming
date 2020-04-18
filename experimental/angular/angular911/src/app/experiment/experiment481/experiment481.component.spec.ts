import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment481Component } from './experiment481.component';

describe('Experiment481Component', () => {
  let component: Experiment481Component;
  let fixture: ComponentFixture<Experiment481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
