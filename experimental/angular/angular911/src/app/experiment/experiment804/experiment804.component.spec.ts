import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment804Component } from './experiment804.component';

describe('Experiment804Component', () => {
  let component: Experiment804Component;
  let fixture: ComponentFixture<Experiment804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
