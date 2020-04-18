import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment266Component } from './experiment266.component';

describe('Experiment266Component', () => {
  let component: Experiment266Component;
  let fixture: ComponentFixture<Experiment266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
