import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment774Component } from './experiment774.component';

describe('Experiment774Component', () => {
  let component: Experiment774Component;
  let fixture: ComponentFixture<Experiment774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
