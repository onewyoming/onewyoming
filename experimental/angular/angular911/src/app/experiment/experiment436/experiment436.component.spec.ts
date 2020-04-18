import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment436Component } from './experiment436.component';

describe('Experiment436Component', () => {
  let component: Experiment436Component;
  let fixture: ComponentFixture<Experiment436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
