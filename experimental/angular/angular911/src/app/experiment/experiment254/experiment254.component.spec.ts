import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment254Component } from './experiment254.component';

describe('Experiment254Component', () => {
  let component: Experiment254Component;
  let fixture: ComponentFixture<Experiment254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
