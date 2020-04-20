import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment470Component } from './experiment470.component';

describe('Experiment470Component', () => {
  let component: Experiment470Component;
  let fixture: ComponentFixture<Experiment470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
