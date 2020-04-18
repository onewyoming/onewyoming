import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment222Component } from './experiment222.component';

describe('Experiment222Component', () => {
  let component: Experiment222Component;
  let fixture: ComponentFixture<Experiment222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
