import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1721Component } from './experiment1721.component';

describe('Experiment1721Component', () => {
  let component: Experiment1721Component;
  let fixture: ComponentFixture<Experiment1721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
