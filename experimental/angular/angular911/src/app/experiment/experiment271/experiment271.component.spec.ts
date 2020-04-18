import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment271Component } from './experiment271.component';

describe('Experiment271Component', () => {
  let component: Experiment271Component;
  let fixture: ComponentFixture<Experiment271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
