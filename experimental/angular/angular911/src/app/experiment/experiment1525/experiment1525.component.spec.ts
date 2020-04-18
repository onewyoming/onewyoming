import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1525Component } from './experiment1525.component';

describe('Experiment1525Component', () => {
  let component: Experiment1525Component;
  let fixture: ComponentFixture<Experiment1525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
