import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment953Component } from './experiment953.component';

describe('Experiment953Component', () => {
  let component: Experiment953Component;
  let fixture: ComponentFixture<Experiment953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
