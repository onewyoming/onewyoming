import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment878Component } from './experiment878.component';

describe('Experiment878Component', () => {
  let component: Experiment878Component;
  let fixture: ComponentFixture<Experiment878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
