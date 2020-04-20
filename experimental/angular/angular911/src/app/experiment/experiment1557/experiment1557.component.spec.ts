import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1557Component } from './experiment1557.component';

describe('Experiment1557Component', () => {
  let component: Experiment1557Component;
  let fixture: ComponentFixture<Experiment1557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
