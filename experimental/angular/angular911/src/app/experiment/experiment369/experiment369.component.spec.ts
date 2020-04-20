import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment369Component } from './experiment369.component';

describe('Experiment369Component', () => {
  let component: Experiment369Component;
  let fixture: ComponentFixture<Experiment369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
