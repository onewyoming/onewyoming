import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment146Component } from './experiment146.component';

describe('Experiment146Component', () => {
  let component: Experiment146Component;
  let fixture: ComponentFixture<Experiment146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
