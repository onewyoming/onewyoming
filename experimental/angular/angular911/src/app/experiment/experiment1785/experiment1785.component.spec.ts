import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1785Component } from './experiment1785.component';

describe('Experiment1785Component', () => {
  let component: Experiment1785Component;
  let fixture: ComponentFixture<Experiment1785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
