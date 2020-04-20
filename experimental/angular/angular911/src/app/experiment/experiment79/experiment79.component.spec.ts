import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment79Component } from './experiment79.component';

describe('Experiment79Component', () => {
  let component: Experiment79Component;
  let fixture: ComponentFixture<Experiment79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
