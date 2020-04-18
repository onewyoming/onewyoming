import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment995Component } from './experiment995.component';

describe('Experiment995Component', () => {
  let component: Experiment995Component;
  let fixture: ComponentFixture<Experiment995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
