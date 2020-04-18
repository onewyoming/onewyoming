import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment390Component } from './experiment390.component';

describe('Experiment390Component', () => {
  let component: Experiment390Component;
  let fixture: ComponentFixture<Experiment390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
