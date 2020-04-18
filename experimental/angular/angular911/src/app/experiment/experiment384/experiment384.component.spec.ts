import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment384Component } from './experiment384.component';

describe('Experiment384Component', () => {
  let component: Experiment384Component;
  let fixture: ComponentFixture<Experiment384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
