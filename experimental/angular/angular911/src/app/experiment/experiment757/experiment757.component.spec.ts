import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment757Component } from './experiment757.component';

describe('Experiment757Component', () => {
  let component: Experiment757Component;
  let fixture: ComponentFixture<Experiment757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
