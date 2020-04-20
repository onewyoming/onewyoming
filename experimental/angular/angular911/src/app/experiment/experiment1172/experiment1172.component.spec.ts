import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1172Component } from './experiment1172.component';

describe('Experiment1172Component', () => {
  let component: Experiment1172Component;
  let fixture: ComponentFixture<Experiment1172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
