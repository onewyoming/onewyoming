import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment47Component } from './experiment47.component';

describe('Experiment47Component', () => {
  let component: Experiment47Component;
  let fixture: ComponentFixture<Experiment47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
