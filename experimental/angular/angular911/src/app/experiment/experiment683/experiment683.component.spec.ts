import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment683Component } from './experiment683.component';

describe('Experiment683Component', () => {
  let component: Experiment683Component;
  let fixture: ComponentFixture<Experiment683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
