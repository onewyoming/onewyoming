import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment586Component } from './experiment586.component';

describe('Experiment586Component', () => {
  let component: Experiment586Component;
  let fixture: ComponentFixture<Experiment586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
