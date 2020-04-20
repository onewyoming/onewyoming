import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment14Component } from './experiment14.component';

describe('Experiment14Component', () => {
  let component: Experiment14Component;
  let fixture: ComponentFixture<Experiment14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
