import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment186Component } from './experiment186.component';

describe('Experiment186Component', () => {
  let component: Experiment186Component;
  let fixture: ComponentFixture<Experiment186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
