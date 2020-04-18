import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment518Component } from './experiment518.component';

describe('Experiment518Component', () => {
  let component: Experiment518Component;
  let fixture: ComponentFixture<Experiment518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
