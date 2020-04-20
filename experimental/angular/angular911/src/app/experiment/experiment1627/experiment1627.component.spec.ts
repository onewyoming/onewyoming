import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1627Component } from './experiment1627.component';

describe('Experiment1627Component', () => {
  let component: Experiment1627Component;
  let fixture: ComponentFixture<Experiment1627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
