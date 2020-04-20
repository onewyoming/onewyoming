import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment89Component } from './experiment89.component';

describe('Experiment89Component', () => {
  let component: Experiment89Component;
  let fixture: ComponentFixture<Experiment89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
