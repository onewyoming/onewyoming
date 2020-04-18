import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1750Component } from './experiment1750.component';

describe('Experiment1750Component', () => {
  let component: Experiment1750Component;
  let fixture: ComponentFixture<Experiment1750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
