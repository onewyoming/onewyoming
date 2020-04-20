import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment414Component } from './experiment414.component';

describe('Experiment414Component', () => {
  let component: Experiment414Component;
  let fixture: ComponentFixture<Experiment414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
