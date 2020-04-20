import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment96Component } from './experiment96.component';

describe('Experiment96Component', () => {
  let component: Experiment96Component;
  let fixture: ComponentFixture<Experiment96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
