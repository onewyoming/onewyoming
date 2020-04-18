import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment680Component } from './experiment680.component';

describe('Experiment680Component', () => {
  let component: Experiment680Component;
  let fixture: ComponentFixture<Experiment680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
