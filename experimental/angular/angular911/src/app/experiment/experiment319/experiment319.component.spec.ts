import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment319Component } from './experiment319.component';

describe('Experiment319Component', () => {
  let component: Experiment319Component;
  let fixture: ComponentFixture<Experiment319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
