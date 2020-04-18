import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment591Component } from './experiment591.component';

describe('Experiment591Component', () => {
  let component: Experiment591Component;
  let fixture: ComponentFixture<Experiment591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
