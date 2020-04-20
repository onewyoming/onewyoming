import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment311Component } from './experiment311.component';

describe('Experiment311Component', () => {
  let component: Experiment311Component;
  let fixture: ComponentFixture<Experiment311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
