import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment941Component } from './experiment941.component';

describe('Experiment941Component', () => {
  let component: Experiment941Component;
  let fixture: ComponentFixture<Experiment941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
