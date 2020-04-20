import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1251Component } from './experiment1251.component';

describe('Experiment1251Component', () => {
  let component: Experiment1251Component;
  let fixture: ComponentFixture<Experiment1251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
