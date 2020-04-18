import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment666Component } from './experiment666.component';

describe('Experiment666Component', () => {
  let component: Experiment666Component;
  let fixture: ComponentFixture<Experiment666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
