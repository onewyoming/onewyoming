import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1608Component } from './experiment1608.component';

describe('Experiment1608Component', () => {
  let component: Experiment1608Component;
  let fixture: ComponentFixture<Experiment1608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
