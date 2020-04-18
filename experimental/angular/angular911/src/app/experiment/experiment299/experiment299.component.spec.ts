import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment299Component } from './experiment299.component';

describe('Experiment299Component', () => {
  let component: Experiment299Component;
  let fixture: ComponentFixture<Experiment299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
