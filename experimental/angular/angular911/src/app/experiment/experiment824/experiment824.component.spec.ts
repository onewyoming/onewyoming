import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment824Component } from './experiment824.component';

describe('Experiment824Component', () => {
  let component: Experiment824Component;
  let fixture: ComponentFixture<Experiment824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
