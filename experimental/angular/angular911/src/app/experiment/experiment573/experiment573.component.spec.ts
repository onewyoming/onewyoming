import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment573Component } from './experiment573.component';

describe('Experiment573Component', () => {
  let component: Experiment573Component;
  let fixture: ComponentFixture<Experiment573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
