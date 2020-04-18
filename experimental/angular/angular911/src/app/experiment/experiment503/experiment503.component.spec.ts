import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment503Component } from './experiment503.component';

describe('Experiment503Component', () => {
  let component: Experiment503Component;
  let fixture: ComponentFixture<Experiment503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
