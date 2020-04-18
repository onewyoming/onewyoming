import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment842Component } from './experiment842.component';

describe('Experiment842Component', () => {
  let component: Experiment842Component;
  let fixture: ComponentFixture<Experiment842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
