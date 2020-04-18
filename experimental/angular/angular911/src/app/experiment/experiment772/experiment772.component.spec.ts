import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment772Component } from './experiment772.component';

describe('Experiment772Component', () => {
  let component: Experiment772Component;
  let fixture: ComponentFixture<Experiment772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
