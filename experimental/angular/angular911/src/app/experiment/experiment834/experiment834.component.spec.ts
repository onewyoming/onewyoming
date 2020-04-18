import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment834Component } from './experiment834.component';

describe('Experiment834Component', () => {
  let component: Experiment834Component;
  let fixture: ComponentFixture<Experiment834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
