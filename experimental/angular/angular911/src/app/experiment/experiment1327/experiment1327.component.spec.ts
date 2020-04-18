import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1327Component } from './experiment1327.component';

describe('Experiment1327Component', () => {
  let component: Experiment1327Component;
  let fixture: ComponentFixture<Experiment1327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
