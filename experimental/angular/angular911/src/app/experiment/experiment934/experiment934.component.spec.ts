import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment934Component } from './experiment934.component';

describe('Experiment934Component', () => {
  let component: Experiment934Component;
  let fixture: ComponentFixture<Experiment934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
