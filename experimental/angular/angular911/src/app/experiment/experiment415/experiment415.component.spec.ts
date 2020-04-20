import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment415Component } from './experiment415.component';

describe('Experiment415Component', () => {
  let component: Experiment415Component;
  let fixture: ComponentFixture<Experiment415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
