import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1737Component } from './experiment1737.component';

describe('Experiment1737Component', () => {
  let component: Experiment1737Component;
  let fixture: ComponentFixture<Experiment1737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
