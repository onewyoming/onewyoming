import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment699Component } from './experiment699.component';

describe('Experiment699Component', () => {
  let component: Experiment699Component;
  let fixture: ComponentFixture<Experiment699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
