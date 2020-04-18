import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment614Component } from './experiment614.component';

describe('Experiment614Component', () => {
  let component: Experiment614Component;
  let fixture: ComponentFixture<Experiment614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
