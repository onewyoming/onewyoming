import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment653Component } from './experiment653.component';

describe('Experiment653Component', () => {
  let component: Experiment653Component;
  let fixture: ComponentFixture<Experiment653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
