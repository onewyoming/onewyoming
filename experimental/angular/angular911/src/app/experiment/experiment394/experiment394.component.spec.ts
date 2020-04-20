import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment394Component } from './experiment394.component';

describe('Experiment394Component', () => {
  let component: Experiment394Component;
  let fixture: ComponentFixture<Experiment394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
