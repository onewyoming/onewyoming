import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1032Component } from './experiment1032.component';

describe('Experiment1032Component', () => {
  let component: Experiment1032Component;
  let fixture: ComponentFixture<Experiment1032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
