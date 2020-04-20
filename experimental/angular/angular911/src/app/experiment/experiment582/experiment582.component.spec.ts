import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment582Component } from './experiment582.component';

describe('Experiment582Component', () => {
  let component: Experiment582Component;
  let fixture: ComponentFixture<Experiment582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
