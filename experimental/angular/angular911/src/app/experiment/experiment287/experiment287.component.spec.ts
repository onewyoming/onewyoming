import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment287Component } from './experiment287.component';

describe('Experiment287Component', () => {
  let component: Experiment287Component;
  let fixture: ComponentFixture<Experiment287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
