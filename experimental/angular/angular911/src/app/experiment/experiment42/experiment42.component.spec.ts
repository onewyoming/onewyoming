import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment42Component } from './experiment42.component';

describe('Experiment42Component', () => {
  let component: Experiment42Component;
  let fixture: ComponentFixture<Experiment42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
