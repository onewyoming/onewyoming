import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment958Component } from './experiment958.component';

describe('Experiment958Component', () => {
  let component: Experiment958Component;
  let fixture: ComponentFixture<Experiment958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
