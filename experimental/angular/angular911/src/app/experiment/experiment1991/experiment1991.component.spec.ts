import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1991Component } from './experiment1991.component';

describe('Experiment1991Component', () => {
  let component: Experiment1991Component;
  let fixture: ComponentFixture<Experiment1991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
