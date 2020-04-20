import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1985Component } from './experiment1985.component';

describe('Experiment1985Component', () => {
  let component: Experiment1985Component;
  let fixture: ComponentFixture<Experiment1985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
