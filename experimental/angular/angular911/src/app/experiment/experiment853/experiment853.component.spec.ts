import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment853Component } from './experiment853.component';

describe('Experiment853Component', () => {
  let component: Experiment853Component;
  let fixture: ComponentFixture<Experiment853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
