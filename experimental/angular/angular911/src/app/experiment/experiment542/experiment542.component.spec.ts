import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment542Component } from './experiment542.component';

describe('Experiment542Component', () => {
  let component: Experiment542Component;
  let fixture: ComponentFixture<Experiment542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
