import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment216Component } from './experiment216.component';

describe('Experiment216Component', () => {
  let component: Experiment216Component;
  let fixture: ComponentFixture<Experiment216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
