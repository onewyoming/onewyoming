import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment491Component } from './experiment491.component';

describe('Experiment491Component', () => {
  let component: Experiment491Component;
  let fixture: ComponentFixture<Experiment491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
