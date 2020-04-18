import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment529Component } from './experiment529.component';

describe('Experiment529Component', () => {
  let component: Experiment529Component;
  let fixture: ComponentFixture<Experiment529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
