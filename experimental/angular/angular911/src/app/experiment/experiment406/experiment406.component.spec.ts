import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment406Component } from './experiment406.component';

describe('Experiment406Component', () => {
  let component: Experiment406Component;
  let fixture: ComponentFixture<Experiment406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
