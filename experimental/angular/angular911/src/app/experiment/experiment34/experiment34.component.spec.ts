import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment34Component } from './experiment34.component';

describe('Experiment34Component', () => {
  let component: Experiment34Component;
  let fixture: ComponentFixture<Experiment34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
