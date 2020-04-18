import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment861Component } from './experiment861.component';

describe('Experiment861Component', () => {
  let component: Experiment861Component;
  let fixture: ComponentFixture<Experiment861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
