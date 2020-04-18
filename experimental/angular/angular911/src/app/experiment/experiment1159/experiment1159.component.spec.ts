import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1159Component } from './experiment1159.component';

describe('Experiment1159Component', () => {
  let component: Experiment1159Component;
  let fixture: ComponentFixture<Experiment1159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
