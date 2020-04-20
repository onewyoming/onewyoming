import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment400Component } from './experiment400.component';

describe('Experiment400Component', () => {
  let component: Experiment400Component;
  let fixture: ComponentFixture<Experiment400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
