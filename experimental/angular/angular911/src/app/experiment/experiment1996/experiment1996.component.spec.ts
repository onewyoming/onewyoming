import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1996Component } from './experiment1996.component';

describe('Experiment1996Component', () => {
  let component: Experiment1996Component;
  let fixture: ComponentFixture<Experiment1996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
