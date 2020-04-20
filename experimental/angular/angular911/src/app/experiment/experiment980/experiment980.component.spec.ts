import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment980Component } from './experiment980.component';

describe('Experiment980Component', () => {
  let component: Experiment980Component;
  let fixture: ComponentFixture<Experiment980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
