import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment107Component } from './experiment107.component';

describe('Experiment107Component', () => {
  let component: Experiment107Component;
  let fixture: ComponentFixture<Experiment107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
