import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment678Component } from './experiment678.component';

describe('Experiment678Component', () => {
  let component: Experiment678Component;
  let fixture: ComponentFixture<Experiment678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
