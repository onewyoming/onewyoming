import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment874Component } from './experiment874.component';

describe('Experiment874Component', () => {
  let component: Experiment874Component;
  let fixture: ComponentFixture<Experiment874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
