import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment904Component } from './experiment904.component';

describe('Experiment904Component', () => {
  let component: Experiment904Component;
  let fixture: ComponentFixture<Experiment904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
