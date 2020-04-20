import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment466Component } from './experiment466.component';

describe('Experiment466Component', () => {
  let component: Experiment466Component;
  let fixture: ComponentFixture<Experiment466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
