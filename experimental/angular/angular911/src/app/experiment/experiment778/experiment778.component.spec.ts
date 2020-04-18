import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment778Component } from './experiment778.component';

describe('Experiment778Component', () => {
  let component: Experiment778Component;
  let fixture: ComponentFixture<Experiment778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
