import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1256Component } from './experiment1256.component';

describe('Experiment1256Component', () => {
  let component: Experiment1256Component;
  let fixture: ComponentFixture<Experiment1256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
