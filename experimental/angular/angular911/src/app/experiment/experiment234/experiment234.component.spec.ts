import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment234Component } from './experiment234.component';

describe('Experiment234Component', () => {
  let component: Experiment234Component;
  let fixture: ComponentFixture<Experiment234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
