import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment825Component } from './experiment825.component';

describe('Experiment825Component', () => {
  let component: Experiment825Component;
  let fixture: ComponentFixture<Experiment825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
