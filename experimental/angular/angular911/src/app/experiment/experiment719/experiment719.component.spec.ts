import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment719Component } from './experiment719.component';

describe('Experiment719Component', () => {
  let component: Experiment719Component;
  let fixture: ComponentFixture<Experiment719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
