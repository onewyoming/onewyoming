import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment396Component } from './experiment396.component';

describe('Experiment396Component', () => {
  let component: Experiment396Component;
  let fixture: ComponentFixture<Experiment396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
