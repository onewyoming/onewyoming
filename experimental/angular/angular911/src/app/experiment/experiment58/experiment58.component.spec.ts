import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment58Component } from './experiment58.component';

describe('Experiment58Component', () => {
  let component: Experiment58Component;
  let fixture: ComponentFixture<Experiment58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
