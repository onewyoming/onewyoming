import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1689Component } from './experiment1689.component';

describe('Experiment1689Component', () => {
  let component: Experiment1689Component;
  let fixture: ComponentFixture<Experiment1689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
