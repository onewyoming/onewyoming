import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1231Component } from './experiment1231.component';

describe('Experiment1231Component', () => {
  let component: Experiment1231Component;
  let fixture: ComponentFixture<Experiment1231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
