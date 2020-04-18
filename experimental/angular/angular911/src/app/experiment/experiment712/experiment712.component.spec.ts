import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment712Component } from './experiment712.component';

describe('Experiment712Component', () => {
  let component: Experiment712Component;
  let fixture: ComponentFixture<Experiment712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
