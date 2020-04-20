import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment970Component } from './experiment970.component';

describe('Experiment970Component', () => {
  let component: Experiment970Component;
  let fixture: ComponentFixture<Experiment970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
