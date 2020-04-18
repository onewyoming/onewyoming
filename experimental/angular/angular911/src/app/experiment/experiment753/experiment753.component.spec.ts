import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment753Component } from './experiment753.component';

describe('Experiment753Component', () => {
  let component: Experiment753Component;
  let fixture: ComponentFixture<Experiment753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
