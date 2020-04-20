import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment193Component } from './experiment193.component';

describe('Experiment193Component', () => {
  let component: Experiment193Component;
  let fixture: ComponentFixture<Experiment193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
