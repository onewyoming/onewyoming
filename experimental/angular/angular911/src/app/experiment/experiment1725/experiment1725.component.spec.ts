import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1725Component } from './experiment1725.component';

describe('Experiment1725Component', () => {
  let component: Experiment1725Component;
  let fixture: ComponentFixture<Experiment1725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
