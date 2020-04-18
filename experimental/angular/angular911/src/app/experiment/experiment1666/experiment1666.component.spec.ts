import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1666Component } from './experiment1666.component';

describe('Experiment1666Component', () => {
  let component: Experiment1666Component;
  let fixture: ComponentFixture<Experiment1666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
