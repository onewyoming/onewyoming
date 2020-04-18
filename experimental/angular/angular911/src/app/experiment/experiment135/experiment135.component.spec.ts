import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment135Component } from './experiment135.component';

describe('Experiment135Component', () => {
  let component: Experiment135Component;
  let fixture: ComponentFixture<Experiment135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
