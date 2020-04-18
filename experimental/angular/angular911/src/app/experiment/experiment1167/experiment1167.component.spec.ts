import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1167Component } from './experiment1167.component';

describe('Experiment1167Component', () => {
  let component: Experiment1167Component;
  let fixture: ComponentFixture<Experiment1167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
