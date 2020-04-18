import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment170Component } from './experiment170.component';

describe('Experiment170Component', () => {
  let component: Experiment170Component;
  let fixture: ComponentFixture<Experiment170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
