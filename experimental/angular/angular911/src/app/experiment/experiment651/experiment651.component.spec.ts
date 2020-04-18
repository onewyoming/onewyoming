import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment651Component } from './experiment651.component';

describe('Experiment651Component', () => {
  let component: Experiment651Component;
  let fixture: ComponentFixture<Experiment651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
