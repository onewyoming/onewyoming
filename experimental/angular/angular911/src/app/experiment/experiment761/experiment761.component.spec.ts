import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment761Component } from './experiment761.component';

describe('Experiment761Component', () => {
  let component: Experiment761Component;
  let fixture: ComponentFixture<Experiment761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
