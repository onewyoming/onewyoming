import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment821Component } from './experiment821.component';

describe('Experiment821Component', () => {
  let component: Experiment821Component;
  let fixture: ComponentFixture<Experiment821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
