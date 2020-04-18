import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1580Component } from './experiment1580.component';

describe('Experiment1580Component', () => {
  let component: Experiment1580Component;
  let fixture: ComponentFixture<Experiment1580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
