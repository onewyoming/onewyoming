import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment622Component } from './experiment622.component';

describe('Experiment622Component', () => {
  let component: Experiment622Component;
  let fixture: ComponentFixture<Experiment622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
