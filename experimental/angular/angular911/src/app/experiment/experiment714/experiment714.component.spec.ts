import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment714Component } from './experiment714.component';

describe('Experiment714Component', () => {
  let component: Experiment714Component;
  let fixture: ComponentFixture<Experiment714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
