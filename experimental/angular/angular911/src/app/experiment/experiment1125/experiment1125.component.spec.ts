import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1125Component } from './experiment1125.component';

describe('Experiment1125Component', () => {
  let component: Experiment1125Component;
  let fixture: ComponentFixture<Experiment1125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
