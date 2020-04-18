import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment241Component } from './experiment241.component';

describe('Experiment241Component', () => {
  let component: Experiment241Component;
  let fixture: ComponentFixture<Experiment241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
