import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment632Component } from './experiment632.component';

describe('Experiment632Component', () => {
  let component: Experiment632Component;
  let fixture: ComponentFixture<Experiment632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
