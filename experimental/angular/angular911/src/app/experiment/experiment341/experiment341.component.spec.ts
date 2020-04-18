import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment341Component } from './experiment341.component';

describe('Experiment341Component', () => {
  let component: Experiment341Component;
  let fixture: ComponentFixture<Experiment341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
