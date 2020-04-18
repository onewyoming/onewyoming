import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment777Component } from './experiment777.component';

describe('Experiment777Component', () => {
  let component: Experiment777Component;
  let fixture: ComponentFixture<Experiment777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
