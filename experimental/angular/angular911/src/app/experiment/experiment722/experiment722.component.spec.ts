import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment722Component } from './experiment722.component';

describe('Experiment722Component', () => {
  let component: Experiment722Component;
  let fixture: ComponentFixture<Experiment722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
