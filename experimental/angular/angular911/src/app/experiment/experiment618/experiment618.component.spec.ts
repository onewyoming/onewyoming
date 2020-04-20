import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment618Component } from './experiment618.component';

describe('Experiment618Component', () => {
  let component: Experiment618Component;
  let fixture: ComponentFixture<Experiment618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
