import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1864Component } from './experiment1864.component';

describe('Experiment1864Component', () => {
  let component: Experiment1864Component;
  let fixture: ComponentFixture<Experiment1864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
