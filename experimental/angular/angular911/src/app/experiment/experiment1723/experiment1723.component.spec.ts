import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1723Component } from './experiment1723.component';

describe('Experiment1723Component', () => {
  let component: Experiment1723Component;
  let fixture: ComponentFixture<Experiment1723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
