import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment969Component } from './experiment969.component';

describe('Experiment969Component', () => {
  let component: Experiment969Component;
  let fixture: ComponentFixture<Experiment969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
