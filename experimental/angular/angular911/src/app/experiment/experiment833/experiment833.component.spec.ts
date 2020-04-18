import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment833Component } from './experiment833.component';

describe('Experiment833Component', () => {
  let component: Experiment833Component;
  let fixture: ComponentFixture<Experiment833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
