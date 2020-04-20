import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment220Component } from './experiment220.component';

describe('Experiment220Component', () => {
  let component: Experiment220Component;
  let fixture: ComponentFixture<Experiment220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
