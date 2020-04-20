import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment295Component } from './experiment295.component';

describe('Experiment295Component', () => {
  let component: Experiment295Component;
  let fixture: ComponentFixture<Experiment295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
