import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment132Component } from './experiment132.component';

describe('Experiment132Component', () => {
  let component: Experiment132Component;
  let fixture: ComponentFixture<Experiment132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
