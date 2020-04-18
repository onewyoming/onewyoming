import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment259Component } from './experiment259.component';

describe('Experiment259Component', () => {
  let component: Experiment259Component;
  let fixture: ComponentFixture<Experiment259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
