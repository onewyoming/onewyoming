import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment596Component } from './experiment596.component';

describe('Experiment596Component', () => {
  let component: Experiment596Component;
  let fixture: ComponentFixture<Experiment596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
