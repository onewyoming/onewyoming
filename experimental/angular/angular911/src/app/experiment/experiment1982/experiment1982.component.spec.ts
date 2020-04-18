import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1982Component } from './experiment1982.component';

describe('Experiment1982Component', () => {
  let component: Experiment1982Component;
  let fixture: ComponentFixture<Experiment1982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
