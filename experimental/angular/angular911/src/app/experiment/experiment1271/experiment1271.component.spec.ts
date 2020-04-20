import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1271Component } from './experiment1271.component';

describe('Experiment1271Component', () => {
  let component: Experiment1271Component;
  let fixture: ComponentFixture<Experiment1271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
