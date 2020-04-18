import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment708Component } from './experiment708.component';

describe('Experiment708Component', () => {
  let component: Experiment708Component;
  let fixture: ComponentFixture<Experiment708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
