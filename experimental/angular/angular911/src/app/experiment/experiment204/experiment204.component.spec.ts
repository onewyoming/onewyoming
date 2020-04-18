import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment204Component } from './experiment204.component';

describe('Experiment204Component', () => {
  let component: Experiment204Component;
  let fixture: ComponentFixture<Experiment204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
