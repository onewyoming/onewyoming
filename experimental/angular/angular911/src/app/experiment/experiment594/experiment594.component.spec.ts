import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment594Component } from './experiment594.component';

describe('Experiment594Component', () => {
  let component: Experiment594Component;
  let fixture: ComponentFixture<Experiment594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
