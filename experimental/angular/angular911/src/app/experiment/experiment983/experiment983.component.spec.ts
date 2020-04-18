import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment983Component } from './experiment983.component';

describe('Experiment983Component', () => {
  let component: Experiment983Component;
  let fixture: ComponentFixture<Experiment983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
