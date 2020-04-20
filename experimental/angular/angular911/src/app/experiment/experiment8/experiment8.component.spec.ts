import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment8Component } from './experiment8.component';

describe('Experiment8Component', () => {
  let component: Experiment8Component;
  let fixture: ComponentFixture<Experiment8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
