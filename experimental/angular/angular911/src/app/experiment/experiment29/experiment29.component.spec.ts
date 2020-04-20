import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment29Component } from './experiment29.component';

describe('Experiment29Component', () => {
  let component: Experiment29Component;
  let fixture: ComponentFixture<Experiment29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
