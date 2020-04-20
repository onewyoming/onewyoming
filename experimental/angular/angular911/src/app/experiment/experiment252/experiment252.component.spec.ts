import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment252Component } from './experiment252.component';

describe('Experiment252Component', () => {
  let component: Experiment252Component;
  let fixture: ComponentFixture<Experiment252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
