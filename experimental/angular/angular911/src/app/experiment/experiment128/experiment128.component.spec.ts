import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment128Component } from './experiment128.component';

describe('Experiment128Component', () => {
  let component: Experiment128Component;
  let fixture: ComponentFixture<Experiment128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
