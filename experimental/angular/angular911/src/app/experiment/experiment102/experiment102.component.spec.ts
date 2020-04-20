import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment102Component } from './experiment102.component';

describe('Experiment102Component', () => {
  let component: Experiment102Component;
  let fixture: ComponentFixture<Experiment102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
