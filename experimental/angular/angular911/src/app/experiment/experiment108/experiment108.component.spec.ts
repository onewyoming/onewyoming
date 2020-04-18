import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment108Component } from './experiment108.component';

describe('Experiment108Component', () => {
  let component: Experiment108Component;
  let fixture: ComponentFixture<Experiment108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
