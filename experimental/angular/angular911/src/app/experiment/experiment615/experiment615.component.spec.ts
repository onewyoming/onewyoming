import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment615Component } from './experiment615.component';

describe('Experiment615Component', () => {
  let component: Experiment615Component;
  let fixture: ComponentFixture<Experiment615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
