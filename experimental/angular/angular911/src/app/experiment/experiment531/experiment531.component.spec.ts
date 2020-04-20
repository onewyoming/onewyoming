import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment531Component } from './experiment531.component';

describe('Experiment531Component', () => {
  let component: Experiment531Component;
  let fixture: ComponentFixture<Experiment531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
