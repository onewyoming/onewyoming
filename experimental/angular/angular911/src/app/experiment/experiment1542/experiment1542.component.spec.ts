import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1542Component } from './experiment1542.component';

describe('Experiment1542Component', () => {
  let component: Experiment1542Component;
  let fixture: ComponentFixture<Experiment1542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
