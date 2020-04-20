import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment280Component } from './experiment280.component';

describe('Experiment280Component', () => {
  let component: Experiment280Component;
  let fixture: ComponentFixture<Experiment280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
