import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment420Component } from './experiment420.component';

describe('Experiment420Component', () => {
  let component: Experiment420Component;
  let fixture: ComponentFixture<Experiment420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
