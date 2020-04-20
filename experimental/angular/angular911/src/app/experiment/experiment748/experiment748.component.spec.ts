import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment748Component } from './experiment748.component';

describe('Experiment748Component', () => {
  let component: Experiment748Component;
  let fixture: ComponentFixture<Experiment748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
