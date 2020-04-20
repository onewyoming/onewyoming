import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment814Component } from './experiment814.component';

describe('Experiment814Component', () => {
  let component: Experiment814Component;
  let fixture: ComponentFixture<Experiment814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
