import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1979Component } from './experiment1979.component';

describe('Experiment1979Component', () => {
  let component: Experiment1979Component;
  let fixture: ComponentFixture<Experiment1979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
