import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment808Component } from './experiment808.component';

describe('Experiment808Component', () => {
  let component: Experiment808Component;
  let fixture: ComponentFixture<Experiment808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
