import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment829Component } from './experiment829.component';

describe('Experiment829Component', () => {
  let component: Experiment829Component;
  let fixture: ComponentFixture<Experiment829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
