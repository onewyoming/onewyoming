import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment811Component } from './experiment811.component';

describe('Experiment811Component', () => {
  let component: Experiment811Component;
  let fixture: ComponentFixture<Experiment811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
