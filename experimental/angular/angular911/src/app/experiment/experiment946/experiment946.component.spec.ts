import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment946Component } from './experiment946.component';

describe('Experiment946Component', () => {
  let component: Experiment946Component;
  let fixture: ComponentFixture<Experiment946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
