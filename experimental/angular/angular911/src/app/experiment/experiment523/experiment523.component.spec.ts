import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment523Component } from './experiment523.component';

describe('Experiment523Component', () => {
  let component: Experiment523Component;
  let fixture: ComponentFixture<Experiment523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
