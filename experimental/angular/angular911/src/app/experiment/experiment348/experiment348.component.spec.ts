import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment348Component } from './experiment348.component';

describe('Experiment348Component', () => {
  let component: Experiment348Component;
  let fixture: ComponentFixture<Experiment348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
