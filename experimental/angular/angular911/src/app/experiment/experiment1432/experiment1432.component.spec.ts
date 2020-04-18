import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1432Component } from './experiment1432.component';

describe('Experiment1432Component', () => {
  let component: Experiment1432Component;
  let fixture: ComponentFixture<Experiment1432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
