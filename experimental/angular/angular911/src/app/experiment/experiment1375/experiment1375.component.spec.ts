import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1375Component } from './experiment1375.component';

describe('Experiment1375Component', () => {
  let component: Experiment1375Component;
  let fixture: ComponentFixture<Experiment1375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
