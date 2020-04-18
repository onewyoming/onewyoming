import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment770Component } from './experiment770.component';

describe('Experiment770Component', () => {
  let component: Experiment770Component;
  let fixture: ComponentFixture<Experiment770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
