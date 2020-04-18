import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment641Component } from './experiment641.component';

describe('Experiment641Component', () => {
  let component: Experiment641Component;
  let fixture: ComponentFixture<Experiment641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
