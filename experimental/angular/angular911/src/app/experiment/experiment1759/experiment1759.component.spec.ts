import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1759Component } from './experiment1759.component';

describe('Experiment1759Component', () => {
  let component: Experiment1759Component;
  let fixture: ComponentFixture<Experiment1759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
