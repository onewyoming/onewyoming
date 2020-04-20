import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment634Component } from './experiment634.component';

describe('Experiment634Component', () => {
  let component: Experiment634Component;
  let fixture: ComponentFixture<Experiment634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
