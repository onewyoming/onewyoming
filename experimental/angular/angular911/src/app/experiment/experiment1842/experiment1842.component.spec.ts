import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1842Component } from './experiment1842.component';

describe('Experiment1842Component', () => {
  let component: Experiment1842Component;
  let fixture: ComponentFixture<Experiment1842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
