import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment494Component } from './experiment494.component';

describe('Experiment494Component', () => {
  let component: Experiment494Component;
  let fixture: ComponentFixture<Experiment494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
