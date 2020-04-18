import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment565Component } from './experiment565.component';

describe('Experiment565Component', () => {
  let component: Experiment565Component;
  let fixture: ComponentFixture<Experiment565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
