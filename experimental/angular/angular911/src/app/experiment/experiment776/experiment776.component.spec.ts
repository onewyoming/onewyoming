import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment776Component } from './experiment776.component';

describe('Experiment776Component', () => {
  let component: Experiment776Component;
  let fixture: ComponentFixture<Experiment776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
