import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment898Component } from './experiment898.component';

describe('Experiment898Component', () => {
  let component: Experiment898Component;
  let fixture: ComponentFixture<Experiment898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
