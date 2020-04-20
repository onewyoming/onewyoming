import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment555Component } from './experiment555.component';

describe('Experiment555Component', () => {
  let component: Experiment555Component;
  let fixture: ComponentFixture<Experiment555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
