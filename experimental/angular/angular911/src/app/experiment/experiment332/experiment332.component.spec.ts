import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment332Component } from './experiment332.component';

describe('Experiment332Component', () => {
  let component: Experiment332Component;
  let fixture: ComponentFixture<Experiment332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
