import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1107Component } from './experiment1107.component';

describe('Experiment1107Component', () => {
  let component: Experiment1107Component;
  let fixture: ComponentFixture<Experiment1107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
