import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment377Component } from './experiment377.component';

describe('Experiment377Component', () => {
  let component: Experiment377Component;
  let fixture: ComponentFixture<Experiment377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
