import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment160Component } from './experiment160.component';

describe('Experiment160Component', () => {
  let component: Experiment160Component;
  let fixture: ComponentFixture<Experiment160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
