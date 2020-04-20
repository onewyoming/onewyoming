import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment235Component } from './experiment235.component';

describe('Experiment235Component', () => {
  let component: Experiment235Component;
  let fixture: ComponentFixture<Experiment235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
