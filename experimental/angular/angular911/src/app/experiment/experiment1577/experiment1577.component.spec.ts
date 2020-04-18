import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1577Component } from './experiment1577.component';

describe('Experiment1577Component', () => {
  let component: Experiment1577Component;
  let fixture: ComponentFixture<Experiment1577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
