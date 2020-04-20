import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1202Component } from './experiment1202.component';

describe('Experiment1202Component', () => {
  let component: Experiment1202Component;
  let fixture: ComponentFixture<Experiment1202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
