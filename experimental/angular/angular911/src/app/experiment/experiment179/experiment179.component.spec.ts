import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment179Component } from './experiment179.component';

describe('Experiment179Component', () => {
  let component: Experiment179Component;
  let fixture: ComponentFixture<Experiment179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
