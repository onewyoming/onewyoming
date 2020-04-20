import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment239Component } from './experiment239.component';

describe('Experiment239Component', () => {
  let component: Experiment239Component;
  let fixture: ComponentFixture<Experiment239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
