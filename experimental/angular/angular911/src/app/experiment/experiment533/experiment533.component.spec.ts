import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment533Component } from './experiment533.component';

describe('Experiment533Component', () => {
  let component: Experiment533Component;
  let fixture: ComponentFixture<Experiment533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
