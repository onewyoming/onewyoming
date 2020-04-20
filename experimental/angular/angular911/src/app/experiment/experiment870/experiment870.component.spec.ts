import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment870Component } from './experiment870.component';

describe('Experiment870Component', () => {
  let component: Experiment870Component;
  let fixture: ComponentFixture<Experiment870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
