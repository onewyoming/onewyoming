import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment868Component } from './experiment868.component';

describe('Experiment868Component', () => {
  let component: Experiment868Component;
  let fixture: ComponentFixture<Experiment868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
