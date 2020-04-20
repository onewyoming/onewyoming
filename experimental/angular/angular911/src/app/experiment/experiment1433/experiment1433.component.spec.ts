import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1433Component } from './experiment1433.component';

describe('Experiment1433Component', () => {
  let component: Experiment1433Component;
  let fixture: ComponentFixture<Experiment1433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
