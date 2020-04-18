import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment729Component } from './experiment729.component';

describe('Experiment729Component', () => {
  let component: Experiment729Component;
  let fixture: ComponentFixture<Experiment729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
