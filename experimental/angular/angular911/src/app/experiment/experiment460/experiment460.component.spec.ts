import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment460Component } from './experiment460.component';

describe('Experiment460Component', () => {
  let component: Experiment460Component;
  let fixture: ComponentFixture<Experiment460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
