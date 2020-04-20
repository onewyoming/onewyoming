import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1632Component } from './experiment1632.component';

describe('Experiment1632Component', () => {
  let component: Experiment1632Component;
  let fixture: ComponentFixture<Experiment1632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
