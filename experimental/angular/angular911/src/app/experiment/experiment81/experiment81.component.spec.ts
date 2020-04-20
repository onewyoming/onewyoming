import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment81Component } from './experiment81.component';

describe('Experiment81Component', () => {
  let component: Experiment81Component;
  let fixture: ComponentFixture<Experiment81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
