import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment920Component } from './experiment920.component';

describe('Experiment920Component', () => {
  let component: Experiment920Component;
  let fixture: ComponentFixture<Experiment920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
