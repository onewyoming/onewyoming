import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment152Component } from './experiment152.component';

describe('Experiment152Component', () => {
  let component: Experiment152Component;
  let fixture: ComponentFixture<Experiment152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
