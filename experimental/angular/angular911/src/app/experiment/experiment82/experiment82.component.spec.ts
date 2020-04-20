import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment82Component } from './experiment82.component';

describe('Experiment82Component', () => {
  let component: Experiment82Component;
  let fixture: ComponentFixture<Experiment82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
