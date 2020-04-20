import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment496Component } from './experiment496.component';

describe('Experiment496Component', () => {
  let component: Experiment496Component;
  let fixture: ComponentFixture<Experiment496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
