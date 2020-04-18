import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1328Component } from './experiment1328.component';

describe('Experiment1328Component', () => {
  let component: Experiment1328Component;
  let fixture: ComponentFixture<Experiment1328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
