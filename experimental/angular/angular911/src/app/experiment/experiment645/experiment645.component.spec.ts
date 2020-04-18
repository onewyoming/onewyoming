import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment645Component } from './experiment645.component';

describe('Experiment645Component', () => {
  let component: Experiment645Component;
  let fixture: ComponentFixture<Experiment645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
