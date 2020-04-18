import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1794Component } from './experiment1794.component';

describe('Experiment1794Component', () => {
  let component: Experiment1794Component;
  let fixture: ComponentFixture<Experiment1794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
