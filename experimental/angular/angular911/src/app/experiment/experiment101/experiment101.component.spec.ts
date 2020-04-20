import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment101Component } from './experiment101.component';

describe('Experiment101Component', () => {
  let component: Experiment101Component;
  let fixture: ComponentFixture<Experiment101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
