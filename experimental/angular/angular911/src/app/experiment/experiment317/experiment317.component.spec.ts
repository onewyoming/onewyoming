import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment317Component } from './experiment317.component';

describe('Experiment317Component', () => {
  let component: Experiment317Component;
  let fixture: ComponentFixture<Experiment317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
