import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1127Component } from './experiment1127.component';

describe('Experiment1127Component', () => {
  let component: Experiment1127Component;
  let fixture: ComponentFixture<Experiment1127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
