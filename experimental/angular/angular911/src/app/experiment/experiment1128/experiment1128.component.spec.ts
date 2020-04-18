import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1128Component } from './experiment1128.component';

describe('Experiment1128Component', () => {
  let component: Experiment1128Component;
  let fixture: ComponentFixture<Experiment1128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
