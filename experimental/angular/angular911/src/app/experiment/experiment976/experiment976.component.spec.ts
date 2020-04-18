import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment976Component } from './experiment976.component';

describe('Experiment976Component', () => {
  let component: Experiment976Component;
  let fixture: ComponentFixture<Experiment976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
