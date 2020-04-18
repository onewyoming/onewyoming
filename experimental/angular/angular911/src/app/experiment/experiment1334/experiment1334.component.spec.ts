import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1334Component } from './experiment1334.component';

describe('Experiment1334Component', () => {
  let component: Experiment1334Component;
  let fixture: ComponentFixture<Experiment1334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
