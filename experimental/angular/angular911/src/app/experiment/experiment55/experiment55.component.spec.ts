import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment55Component } from './experiment55.component';

describe('Experiment55Component', () => {
  let component: Experiment55Component;
  let fixture: ComponentFixture<Experiment55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
