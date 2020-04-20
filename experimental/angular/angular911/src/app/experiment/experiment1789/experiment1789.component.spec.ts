import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1789Component } from './experiment1789.component';

describe('Experiment1789Component', () => {
  let component: Experiment1789Component;
  let fixture: ComponentFixture<Experiment1789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
