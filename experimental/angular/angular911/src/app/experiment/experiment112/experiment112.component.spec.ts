import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment112Component } from './experiment112.component';

describe('Experiment112Component', () => {
  let component: Experiment112Component;
  let fixture: ComponentFixture<Experiment112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
