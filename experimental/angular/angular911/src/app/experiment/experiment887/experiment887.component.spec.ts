import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment887Component } from './experiment887.component';

describe('Experiment887Component', () => {
  let component: Experiment887Component;
  let fixture: ComponentFixture<Experiment887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
