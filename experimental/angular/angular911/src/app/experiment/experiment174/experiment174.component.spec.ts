import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment174Component } from './experiment174.component';

describe('Experiment174Component', () => {
  let component: Experiment174Component;
  let fixture: ComponentFixture<Experiment174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
