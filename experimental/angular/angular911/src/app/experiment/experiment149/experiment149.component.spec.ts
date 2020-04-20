import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment149Component } from './experiment149.component';

describe('Experiment149Component', () => {
  let component: Experiment149Component;
  let fixture: ComponentFixture<Experiment149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
