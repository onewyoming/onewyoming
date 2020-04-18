import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1262Component } from './experiment1262.component';

describe('Experiment1262Component', () => {
  let component: Experiment1262Component;
  let fixture: ComponentFixture<Experiment1262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
