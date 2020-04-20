import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment716Component } from './experiment716.component';

describe('Experiment716Component', () => {
  let component: Experiment716Component;
  let fixture: ComponentFixture<Experiment716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
