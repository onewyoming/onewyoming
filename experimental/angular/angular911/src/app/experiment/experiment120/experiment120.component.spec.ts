import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment120Component } from './experiment120.component';

describe('Experiment120Component', () => {
  let component: Experiment120Component;
  let fixture: ComponentFixture<Experiment120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
