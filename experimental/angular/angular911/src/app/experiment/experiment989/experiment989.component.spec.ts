import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment989Component } from './experiment989.component';

describe('Experiment989Component', () => {
  let component: Experiment989Component;
  let fixture: ComponentFixture<Experiment989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
